import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
}

entrar(){
  this.auth.entrar(this.usuarioLogin).subscribe((resp:UsuarioLogin)=>{
    this.usuariolg=resp
    // environment.token = this.usuariolg.token
    // environment.nome = this.usuariolg.nome
    // environment.id = this.usuariolg.id
    // environment.foto = this.usuariolg.foto

    this.router.navigate(['/inicio'])
  },erro=>{
    if(erro.status == 500){
      alert("Usuario ou Senha errados!!")
    }
  })
}

