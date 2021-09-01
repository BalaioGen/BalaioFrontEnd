import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/usuarioModel';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  usuarioTipo(event: any) {
    this.tipoUsuario = event.target.value;
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario

    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas não conferem!')
    } else {
      console.log(this.usuario)
      this.authService.cadastrar(this.usuario).subscribe((resp: UsuarioModel) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert("Usuário cadastrado com sucesso!")
      })
    }
  }


}
