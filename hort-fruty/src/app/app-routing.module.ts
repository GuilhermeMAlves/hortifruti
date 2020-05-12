import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ExcluiProdutoComponent } from './excluir/exclui-produto.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'loja', component: LojaComponent},
  { path: 'cadastrar', component: CadastrarComponent},
  { path: 'excluir', component: ExcluiProdutoComponent},
  { path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }