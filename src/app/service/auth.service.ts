import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/UsuarioModel';
import { environment } from 'src/environments/environment.prod';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("https://balaiopi.herokuapp.com/usuarios/logar", usuarioLogin)
  }

  cadastrar(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>("https://balaiopi.herokuapp.com/usuarios/cadastrar", usuario)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != "") {
      ok = true
    }
    return ok
  }
  deslogado() {
    let ok: boolean = true

    if (environment.token != "") {
      ok = false
    }
    return ok
  }


}