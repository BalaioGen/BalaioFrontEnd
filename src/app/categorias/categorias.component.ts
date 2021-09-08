import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { AlertasService } from '../service/alertas.service';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel
  listaCategorias: CategoriaModel[]

  constructor(
    private router: Router,
    private categoriasService: CategoriasService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    if (environment.tipo != 'adm') {
      this.alertas.showAlertInfo('Você precisa ser adm para acessar!')
      this.router.navigate(['/inicio'])
    }

    this.findAllCategorias()
  }

  findAllCategorias() {
    this.categoriasService.getAllCategorias().subscribe((resp: CategoriaModel[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrar() {
    this.categoriasService.postCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria cadastrada com sucesso!')
      this.findAllCategorias()
      this.categoria = new CategoriaModel()

    })
  }

}
