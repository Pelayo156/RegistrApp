import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {
  courseName: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.courseName = '';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.courseName = params['courseName'];
    })
  }

  toHome() {
    this.route.queryParams.subscribe(params => {
      this.router.navigate(['/home'], {queryParams: {user: params['user']}});
    })
  }
}
