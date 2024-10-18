import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresenteprofeService {

  private url: string = 'https://www.presenteprofe.cl/api/v1';

  constructor(private http: HttpClient) { }

  // Función para autentucar al usuario
  validLogin(email: string, password: string) {
    return this.http.get(`${this.url}/auth/me?user=${email}`);
  }

  // Función para traer los cursos del usuario, que en este caso solamente está disponible para profesores
  getCursos(email: string) {
    return this.http.get(`${this.url}/cursos?user=${email}`);
  }
}
