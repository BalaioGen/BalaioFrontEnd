import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoModel } from '../model/ProdutoModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos-view',
  templateUrl: './produtos-view.component.html',
  styleUrls: ['./produtos-view.component.css']
})
export class ProdutosViewComponent implements OnInit {

  produtos: ProdutoModel = new ProdutoModel();
  listaUsuarios: UsuarioModel[]
  // listaProdutos: ProdutoModel[];

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.produtosService.refreshToken()
    
    let id = this.route.snapshot.params['id']
    
    this.findProdutoById(id)
  }

  findProdutoById(id: number){
    this.produtosService.getProdutosById(id).subscribe((resp: ProdutoModel) => {
      this.produtos = resp
    })
  }

}
