import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Iusuario } from 'src/app/Interfaces/Interfaz';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  registrolarg: FormGroup;
  Usuar: Iusuario | undefined;

  constructor(public alertController: AlertController, private formBuilder: FormBuilder) {
    this.registrolarg = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fecha: ['', Validators.required],
      telefono: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {}

  sondatos() {
    if (this.registrolarg.valid) {
      this.Usuar = {
        nombre: this.registrolarg.get('usuario')?.value || '',
        email: this.registrolarg.get('email')?.value || '',
        fechaNacimiento: this.registrolarg.get('fecha')?.value || null,
        telefonoMovil: this.registrolarg.get('telefono')?.value || '',
        sexo: this.registrolarg.get('gender')?.value || '',
      };
      console.log('Datos del usuario:', this.Usuar);
    } else {
      console.error('El formulario no es válido.');
    }
  }
}
