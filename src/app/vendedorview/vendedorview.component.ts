import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoModel } from '../model/ProdutoModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';
@Component({
  selector: 'app-vendedorview',
  templateUrl: './vendedorview.component.html',
  styleUrls: ['./vendedorview.component.css']
})
export class VendedorviewComponent implements OnInit {
  userid = environment.id
  userdata : UsuarioModel[]
  Produtos : ProdutoModel[] = []
  constructor(private router: Router,
    private ProdutosService: ProdutosService,
    private categoriasService: CategoriasService,
    public auth: AuthService) { }

  ngOnInit(){
      if(environment.token == ""){
        this.router.navigate(['/entrar'])
      }
    this.usuario(this.userid);
  }

  usuario(id: number){
    this.auth.getuserlogado(this.userid).subscribe((response)=>{
      for(let i = 0; i<response.produto.length; i++){
          this.Produtos[i] = (response.produto[i])

      }
      console.log(this.Produtos)
    })
  }
}
