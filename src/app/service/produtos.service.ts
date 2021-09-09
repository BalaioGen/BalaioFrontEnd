import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProdutoModel } from '../model/ProdutoModel';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllProdutos() : Observable<ProdutoModel[]>{
    return this.http.get<ProdutoModel[]>('https://balaiopi.herokuapp.com/produtos')
  }

  getProdutosById(id: number) : Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>(`https://balaiopi.herokuapp.com/produtos/${id}`)
  }

  getProdutosByNome(nomeproduto: string) : Observable<ProdutoModel[]>{
    return this.http.get<ProdutoModel[]>(`https://balaiopi.herokuapp.com/produtos/${nomeproduto}`)
  }

  postProdutos(produtos: ProdutoModel) : Observable<ProdutoModel>{
    return this.http.post<ProdutoModel>('https://balaiopi.herokuapp.com/produtos', produtos, this.token)
  }

  putProdutos(produtos: ProdutoModel): Observable<ProdutoModel>{
    return this.http.put<ProdutoModel>('https://balaiopi.herokuapp.com/produtos', produtos, this.token)
  }

  deleteProdutos(id:number){
    return this.http.delete(`https://balaiopi.herokuapp.com/produtos/${id}`, this.token)
  }

}
