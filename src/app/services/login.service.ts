import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = 'https://www.presenteprofe.cl/api/v1';

  constructor(private http: HttpClient) { }

  validLogin(email: string, password: string) {
    return this.http.get(`${this.apiUrl}/auth/me?user=${email}`);
  }
}