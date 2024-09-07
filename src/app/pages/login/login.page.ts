import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string;
  public password: any;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }

  login() {
    if (this.username == 'admin' && this.password == '1234') {
      const data = { username: this.username };
      this.router.navigate(['/home'], { queryParams: data });
    } else {
      alert('Error no esta en la base de datos')
    }
  }

  ngOnInit() {
  }

}
