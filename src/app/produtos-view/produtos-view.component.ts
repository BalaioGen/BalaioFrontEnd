import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoModel } from '../model/ProdutoModel';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos-view',
  templateUrl: './produtos-view.component.html',
  styleUrls: ['./produtos-view.component.css']
})
export class ProdutosViewComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  listaProdutos: ProdutoModel[]

  

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.produtosService.refreshToken()
    let id = this.route.snapshot.params['id']
    
    this.findByIdProduto(id)
  }

  findByIdProduto(id: number){
    this.produtosService.getProdutosById(id).subscribe((resp: ProdutoModel) => {
      this.produto = resp
    })
  }

}
