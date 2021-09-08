import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>('https://balaiopi.herokuapp.com/categorias', this.token)
  }

  getCategoriasById(id: number): Observable<CategoriaModel> {
    return this.http.get<CategoriaModel>(`https://balaiopi.herokuapp.com/categorias/${id}`, this.token)
  }

  getCategoriasByNome(nome: string): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`https://balaiopi.herokuapp.com/categorias/nome/${nome}`, this.token)
  }

  postCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>(`https://balaiopi.herokuapp.com/categorias/`, categoria, this.token)
  }

}
