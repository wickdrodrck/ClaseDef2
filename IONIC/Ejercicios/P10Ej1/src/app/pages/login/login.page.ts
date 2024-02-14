import { IUsuario } from './../../interfaz/interfaz';
import { UsuariosserviService } from './../../servicios/usuariosservi.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registroForm: FormGroup;
  listaa: any;
  mensaje:string = "";
  user: any;

  constructor(public alertController: AlertController, private formBuilder: FormBuilder, private dataservice:UsuariosserviService, private router: Router) {
    this.registroForm = this. formBuilder.group({
      usuario : ['', [Validators.required, Validators.maxLength(16)]],
      contrasenya : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  ngOnInit() {
    const usuarios = this.dataservice.getUsers();
  }

  coinciden(){

    this.user = this.dataservice.getUser(this.registroForm.value.usuario, this.registroForm.value.contrasenya);
    if(this.user && this.user.perfil == "administrador"){
        this.router.navigate(['/lista', this.user.perfil]);
    }else if(this.user){
      this.mensaje = "Usuario sin permisos"
    }else{
      this.mensaje = "Credenciales no válidas"
    }
  }

}
