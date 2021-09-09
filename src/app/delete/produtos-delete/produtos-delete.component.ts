import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { ProdutoModel } from 'src/app/model/ProdutoModel';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent implements OnInit {
  
  produto: ProdutoModel = new ProdutoModel()
  idProd: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    this.produtosService.refreshToken()

    window.scroll(0,0)
  

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
  
    this.idProd = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProd) 
  
  }
  
  findByIdProduto(id: number){
    this.produtosService.getProdutosById(id).subscribe((resp: ProdutoModel) => {
      this.produto = resp
      console.log(this.produto)
    })
  }
  
  apagar(){
    this.produtosService.deleteProdutos(this.idProd).subscribe(()=>{
      this.alertas.showAlertSuccess("Produto excluido com sucesso!!")
      this.router.navigate(['/produtos'])
      })
    }  
  }
  