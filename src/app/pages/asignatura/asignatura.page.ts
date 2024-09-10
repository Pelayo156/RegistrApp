import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {
  name: string;
  attendancePercentage: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.name = '';
    this.attendancePercentage = 0;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = JSON.parse(params['course']).name
      this.attendancePercentage = JSON.parse(params['course']).attendancePercentage
    })
  }

  toHome() {
    this.router.navigate(['/home']);
  }
}