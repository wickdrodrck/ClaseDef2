import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  implements OnInit {

  registroForm: FormGroup;


  constructor(public alertController: AlertController, private formBuilder: FormBuilder) {
    this.registroForm = this. formBuilder.group({
      usuario : ['', [Validators.required, Validators.maxLength(16)]],
      password : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmcontr : ['', Validators.required]
    })
  }

  async Alerta() {
  const alert = await this.alertController.create({
    header: 'Coinciden',
    subHeader: "Usuario:"+this.registroForm.value.usuario+"\n"+"Contraseñas: "+this.registroForm.value.password+" - "+this.registroForm.value.confirmarcontr,
    message: 'Coinciden las contraseñas.',
    buttons: ['OK']
  });



  await alert.present();
}

async AlertaMala() {
  const alert = await this.alertController.create({
    header: 'Alerta',
    subHeader: 'No coinciden',
    message: 'No coinciden las contraseñas',
    buttons: ['OK']
  });

  await alert.present();
}

  coinciden(){
    if(this.registroForm.value.password == this.registroForm.value.confirmarcontr){
      this.Alerta();
    }else{
      this.AlertaMala();
    }
  }

  ngOnInit() {}

}
