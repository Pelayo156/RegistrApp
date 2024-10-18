import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string = '';
  public password: any = '';

  constructor(private router: Router, private presenteprofeService: PresenteprofeService) {}

  // Nueva forma (aun no implementada)
  newLogin(email: string, password: string) {
    let user: any = {};

    // Guardar usuario encontrado por la api
    this.presenteprofeService.validLogin(email, password).subscribe((res) => {
      user = res;
      
      // Guardo el usuario dentro del localStorage
      if(user.message == "Success") {
        localStorage.setItem("user", JSON.stringify(user));
      }

      if(user.data.perfil == "docente") {
      this.router.navigate(['/docente']);
    } else if(user.data.perfil == "estudiante") {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario y/o contraseña incorrectos, intente nuevamente.');
    }
    });
  }

  ngOnInit() {}
}