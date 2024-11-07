import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  public user: User = {
    rut: "",
    nombre: "",
    apellido: "",
    correo: "",
    codigoInvitacion: "",
    perfil: ""
  };

  constructor(private router: Router, private presenteProfeService: PresenteprofeService) { }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.user);
    this.presenteProfeService.registerUser(this.user).subscribe((response) => {
      console.log(response);
    });
  }
}
