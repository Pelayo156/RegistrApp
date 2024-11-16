import { Component, OnInit } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { Curso } from 'src/app/models/curso';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.page.html',
  styleUrls: ['./create-course.page.scss'],
})
export class CreateCoursePage implements OnInit {
  public token: any;
  public curso: Curso = {
    nombre: "",
    sigla: "",
    institucion: "",
    descripcion: ""
  };

  constructor(private router: Router, private presenteProfeService: PresenteprofeService) { }

  ngOnInit() {
    // Obtengo el token que fue guardado dentro del localStorage
    let current_user = localStorage.getItem('user') || 'no existe token';
    this.token = JSON.parse(current_user).token;
    console.log(this.token);
  }

  // Método para enviar datos a la api del curso
  createCourse() {
    this.presenteProfeService.createCourse(this.curso, this.token).subscribe(response => {
      console.log(response);
      this.router.navigate(['/docente']);
    });
  }
}
