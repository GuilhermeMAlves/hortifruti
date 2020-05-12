import { Produto } from './../model/Produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProduto(){
    return this.http.get("http://31.220.57.121:9080/produtos")
  }
}
