import { Component, OnInit } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { Router } from '@angular/router';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  email: string = '';
  alertButtons = ['Salir'];

  constructor(private router: Router, private presenteProfeService: PresenteprofeService) { }

  ngOnInit() {
  }

  emailValido() : boolean{
    const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patronEmail.test(this.email); 
  }

  sendEmail() {
    console.log(this.email);
    this.presenteProfeService.recoverPassword(this.email).subscribe(response => {
      console.log(response);
    });
  }
}