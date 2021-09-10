import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutoModel } from '../model/ProdutoModel';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: ProdutoModel = new ProdutoModel()
  listaProdutos: ProdutoModel[]
  categoria: CategoriaModel = new CategoriaModel()
  listaCategorias: CategoriaModel[]

  constructor(
    private router: Router,
    private ProdutosService: ProdutosService,
    private ctagoriasService: CategoriasService
  ) { }

  ngOnInit() {
    //   if(environment.token == ""){
    //     this.router.navigate(['/entrar'])
    //   }
    //   this.getAllProdutos()
    this.getAllProdutos();
  }
  getAllProdutos() {
    this.ProdutosService.getAllProdutos().subscribe((resp: ProdutoModel[]) => {
      this.listaProdutos = resp
    })
  }

  getCategoriaById(id: number) {
    this.ctagoriasService.getCategoriasById(id).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      console.log(this.categoria)
    })

  }



  //  cadastrarProdutos(){
  //    this.ProdutosService.postProdutos(this.produtos).subscribe((resp: ProdutoModel) => {
  //      this.produtos=resp
  //      alert('Produto Cadastrado com sucesso!')
  //      this.getAllProdutos()
  //      this.produtos = new ProdutoModel()
  //    })
  //  }
}
