import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userlogado : UsuarioModel;
  foto = environment.foto;
  categoria: CategoriaModel
  confirmarSenha: string;
  tipoUsuario: any;
  constructor(
    public auth: AuthService, 
    private router: Router,
    private categorias: CategoriasService
    ) { }

  ngOnInit(){
    window.scroll(0,0)
    
  }

  sair(){
    this.router.navigate(['/entrar']);
    environment.token = ''
    environment.nome =''
    environment.id = 0
    environment.foto = ''
    environment.tipo = ''
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }
  usuarioTipo(event: any) {
    this.tipoUsuario = event.target.value;
  }
  getuser(){
    this.auth.getuserlogado(environment.id).subscribe((resp:UsuarioModel)=>{
      this.userlogado = resp
      console.log(this.userlogado)
    })
  }


  putuser(){
    this.userlogado.tipo = this.tipoUsuario
    this.auth.editlogado(this.userlogado).subscribe((resp:UsuarioModel)=>{
      this.userlogado = resp;
      alert("Usuario Alterado, Por favor se reconecte");
      this.sair();
    })
    console.log(this.userlogado)
  }
}

