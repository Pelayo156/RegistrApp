import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = '';

  constructor(private http: HttpClient) { }

  validLogin(username: string, password: string) {
    let user = {
      username: username,
      password: password
    }
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}