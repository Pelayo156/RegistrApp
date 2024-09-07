import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute) {
    this.username = '';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      console.log(this.username);
    });
  }
}
