import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string = '';
  public password: any = '';

  // Definir usuarios válidos con su ruta de redirección
  private validUsers = [
    { username: 'alumno', password: '12345', redirect: '/home' },
    { username: 'docente', password: '12345', redirect: '/docente' }
  ];

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    
    const user = this.validUsers.find(user => user.username === this.username && user.password === this.password);

    if (user) {
      
      this.router.navigate([user.redirect], { queryParams: { username: this.username, user: JSON.stringify(user)} });
    } else {
     
      alert('Usuario y/o contraseña incorrectos, intente nuevamente.');
    }
  }

  // Nueva forma (aun no implementada)
  newLogin(email: string, password: string) {
    let user: any = {};

    // Guardar usuario encontrado por la api
    this.loginService.validLogin(email, password).subscribe((res) => {
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