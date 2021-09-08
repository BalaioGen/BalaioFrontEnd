import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from '../model/ProdutoModel';
import { AuthService } from '../service/auth.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();

  constructor(private produtoService: ProdutosService,
    private router: Router) {
      
     }

  ngOnInit() {

  }
  cadastrar() {
    this.produtoService.postProdutos(this.produto).subscribe((resp: ProdutoModel) => {
      this.produto = resp
      this.router.navigate(['/produtos'])
      alert("Produto cadastrado com sucesso!")
    })
   
    }
}
