import { NgModule } from '@angular/core';
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
    CadastroprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
    providers: [{provide:LocationStrategy,
    useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
