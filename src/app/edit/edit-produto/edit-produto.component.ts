import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { ProdutoModel } from 'src/app/model/ProdutoModel';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel()

  categoria: CategoriaModel = new CategoriaModel()
  listaCategorias: CategoriaModel[]
  idCat: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private categoriasService: CategoriasService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){

    window.scroll(0,0)
  
    this.produtosService.refreshToken()
    this.categoriasService.refreshToken()
  // if(environment.token == ''){
  //   this.router.navigate(['/entrar'])
  // }

  let id = this.route.snapshot.params['id']
  this.findByIdProduto(id)
  this.findAllCategorias()
 

}

findByIdProduto(id: number){
  this.produtosService.getProdutosById(id).subscribe((resp: ProdutoModel) => {
    this.produto = resp
  })
}

findCategoriaById(){
  this.categoriasService.getCategoriasById(this.idCat).subscribe((resp: CategoriaModel) => {
    this.categoria = resp
  })
}

findAllCategorias(){
  this.categoriasService.getAllCategorias().subscribe((resp: CategoriaModel[]) =>{
    this.listaCategorias = resp
  })
}

atualizar(){
  this.categoria.id = this.idCat
  this.produto.categoria = this.categoria

  this.produtosService.putProdutos(this.produto).subscribe((resp: ProdutoModel) => {
    this.produto = resp
    this.alertas.showAlertSuccess('Postagem atualizada com sucesso!')
    this.router.navigate(['/produtos'])
  })
}

}


