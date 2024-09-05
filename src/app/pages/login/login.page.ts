import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public correo: string;
  public password: any;

  constructor(private navCtrl: NavController) {
    this.correo = '';
    this.password = '';
  }

  login() {
    if (this.correo == 'admin@gmail.com' && this.password == '1234') {
      this.navCtrl.navigateForward('/home');
    } else {
      alert('Error no esta en la base de datos')
    }
  }

  ngOnInit() {
  }

}
