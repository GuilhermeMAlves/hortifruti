import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  key = 'data';
  reverse = 'true'

  listaProdutos: Produto[]
  produto: Produto = new Produto()
  id:number;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.findAllProduto()
  }
  findAllProduto(){
    this.produtosService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos= resp
    })
  }
}