import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutoModel } from '../model/ProdutoModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {

  listaCategorias: CategoriaModel[]
  idCat:number
  categoria: CategoriaModel = new CategoriaModel();
  produto: ProdutoModel = new ProdutoModel();

  usuario: UsuarioModel = new UsuarioModel()
  idUsuario = environment.id



  constructor(private produtoService: ProdutosService,
    private router: Router,
    private categoriasService: CategoriasService) {
      
     }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    console.log(environment.token)
     
    this.categoriasService.refreshToken()
    this.produtoService.refreshToken()

    this.findAllCategorias()

    
  }
  Cadastrar() {

      this.categoria.id = this.idCat
      this.produto.categoria = this.categoria

      this.usuario.id = this.idUsuario
      this.produto.usuario = this.usuario

      console.log(this.produto)
      

      this.produtoService.postProdutos(this.produto).subscribe((resp: ProdutoModel) => {
      this.produto = resp
      this.router.navigate(['/produtos'])
      alert("Produto cadastrado com sucesso!")
    })
   
    }

    
  findAllCategorias() {
    this.categoriasService.getAllCategorias().subscribe((resp: CategoriaModel[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.categoriasService.getCategoriasById(this.idCat).subscribe((resp: CategoriaModel)=> {
      this.categoria = resp
    })
  }
  cadastrarcategoria() {
    this.categoriasService.postCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      alert("Categoria Cadastrada com sucesso")
      this.findAllCategorias()
      this.categoria = new CategoriaModel()

    })
  }

}
