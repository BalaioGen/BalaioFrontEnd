import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriasService } from 'src/app/service/categorias.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel();
  idCat: number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriasService: CategoriasService,
    private alertas: AlertasService,
  ) { }

  ngOnInit(){
    
    this.categoriasService.refreshToken()

    window.scroll(0,0)
  

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idCat = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCat)

  }
  findByIdCategoria(id: number){
    this.categoriasService.getCategoriasById(id).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }
  
  apagar(){
    this.categoriasService.deleteCategoria(this.idCat).subscribe(()=>{
      alert('Categoria excluída com sucesso!')
      this.router.navigate(['/produtos'])
      })
    }  
  }

