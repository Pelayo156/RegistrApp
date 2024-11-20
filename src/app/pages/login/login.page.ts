import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';
import { AlertController } from '@ionic/angular';  // Importar AlertController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public username: string = '';
  public password: any = '';

  constructor(
    private router: Router, 
    private presenteprofeService: PresenteprofeService, 
    private alertController: AlertController  // Inyectar AlertController
  ) {}

  // Nueva forma (aun no implementada)
  newLogin(email: string, password: string) {
    let user: any = {};

    // Guardar usuario encontrado por la api
    this.presenteprofeService.validLogin(email, password).subscribe((res: any) => {
      user = res.data;
      user.token = res.auth.token;

      if(res.message == "Success") {
        localStorage.setItem("user", JSON.stringify(user));
      }

      if(res.data.perfil == "docente") {
        this.router.navigate(['/docente']);
      } else if(res.data.perfil == "estudiante") {
        this.router.navigate(['/home']);
      }
    }, error => {
      
      this.showErrorAlert('Usuario y/o contraseña incorrectos, intente nuevamente.');
      console.log(error);
    });
  }


  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
      cssClass: 'error-alert',  
    });

    await alert.present();
  }
}
