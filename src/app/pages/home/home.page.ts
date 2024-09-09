import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string;
  courses: Array<{ name: string, attendancePercentage: number }>;

  constructor(private route: ActivatedRoute) {
    this.username = '';
    this.courses = [
      
      { name: 'Arquitectura', attendancePercentage: 85 },
      { name: 'Programacion de aplicaciones moviles', attendancePercentage: 90 },
      { name: 'Estadistica descriptiva', attendancePercentage: 80 },
      { name: 'Calidad de software', attendancePercentage: 88 },
    ];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Usuario';
      console.log(this.username);
    });
  }
}
