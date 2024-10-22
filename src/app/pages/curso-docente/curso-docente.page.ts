import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-docente',
  templateUrl: './curso-docente.page.html',
  styleUrls: ['./curso-docente.page.scss'],
})
export class CursoDocentePage implements OnInit {
  public curso: any = {}; 
  public texto: string = '';
  public mostrarQr: boolean = false;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.curso = params;
      console.log(this.curso);
      this.texto = this.curso.id;
    });
  }

  generarQr() {
    this.mostrarQr=true;
  }
}
