import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  implements OnInit {

  usuario:string;
  contrasenya:string;
  confirmcontr:string;

  constructor(public alertController: AlertController) {
    this.usuario = "";
    this.contrasenya = "";
    this.confirmcontr = "";
  }

  async Alerta() {
  const alert = await this.alertController.create({
    header: 'Alerta',
    subHeader: 'Coinciden',
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

  VerificarCont(){
    if(this.contrasenya == this.confirmcontr){
      this.Alerta();
    }else{
      this.AlertaMala();
    }
  }

  ngOnInit() {}

}
