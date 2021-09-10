import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foto = environment.foto;
  categoria: CategoriaModel
  constructor(
    public auth: AuthService, 
    private router: Router,
    private categorias: CategoriasService
    ) { }

  ngOnInit(){
    window.scroll(0,0)
  }
  sair(){
    this.router.navigate(['/entrar']);
    environment.token = ''
    environment.nome =''
    environment.id = 0
    environment.foto = ''
    environment.tipo = ''
  }
}
