import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/UsuarioModel';
import { environment } from 'src/environments/environment.prod';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  usuariologado = environment.id;

  constructor(
    private http: HttpClient,
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("https://balaiopi.herokuapp.com/usuarios/logar", usuarioLogin)
  }

  cadastrar(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>("https://balaiopi.herokuapp.com/usuarios/cadastrar", usuario)
  }

  editlogado(usuario:UsuarioModel):Observable<UsuarioModel>{
    return this.http.put<UsuarioModel>(`​https://balaiopi.herokuapp.com/usuarios​/alterar`,usuario, this.token)
  }

  getuserlogado(id:number):Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`https://balaiopi.herokuapp.com/usuarios/${id}`,this.token)
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

  useradm(){
    let ok: boolean = true

    if(environment.tipo != "administrador"){
      ok= false
    }
    else if(environment.tipo == "administrador"){
      ok = true
    }
    return ok
  }

  uservend(){
    let ok: boolean = true

    if(environment.tipo != "vendedor"){
      ok= false
    }
    return ok
  }

}