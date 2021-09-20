import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { CategoriasService } from 'src/app/service/categorias.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()

  constructor(
    private categoriasService : CategoriasService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
  }

  findByIdCategoria(id:number){
    this.categoriasService.getCategoriasById(id).subscribe()
  }
  
  atualizar(){
    this.categoriasService.putCategoria(this.categoria).subscribe((resp: CategoriaModel)=>{
      this.categoria = resp
      alert('Categoria atualizada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }

}