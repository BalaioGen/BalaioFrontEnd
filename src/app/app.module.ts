import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AlertasComponent } from './alertas/alertas.component';
import { CadastroprodutoComponent } from './cadastroproduto/cadastroproduto.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { EditProdutoComponent } from './edit/edit-produto/edit-produto.component';

// colocar virgula
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { ProdutosViewComponent } from './produtos-view/produtos-view.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { VendedorviewComponent } from './vendedorview/vendedorview.component';
registerLocaleData(ptBr);

// const routes: Routes = [
//   {path:"", redirectTo: "entrar", pathMatch:"full"},

//   {path:"entrar", component: EntrarComponent},
//   {path:"cadastrar", component: CadastrarComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastroComponent,
    HomeComponent,
    SobreComponent,
    EntrarComponent,
    ProdutosComponent,
    CategoriasComponent,
    AlertasComponent,
    CadastroprodutoComponent,
    EditCategoriaComponent,
    EditProdutoComponent,
    ProdutosDeleteComponent,
    ProdutosViewComponent,
    VendedorviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
    providers: [{provide:LocationStrategy,
    useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
