import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SobreComponent } from './sobre/sobre.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroprodutoComponent } from './cadastroproduto/cadastroproduto.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { EditProdutoComponent } from './edit/edit-produto/edit-produto.component';
import { ProdutosViewComponent } from './produtos-view/produtos-view.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'cadastroprod', component: CadastroprodutoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto-edit/:id', component: EditProdutoComponent},
  { path: 'categoria-edit/:id', component: EditCategoriaComponent},
  { path: 'produto-delete/:id', component: ProdutosDeleteComponent},
  { path: 'produtos-view', component: ProdutosViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
