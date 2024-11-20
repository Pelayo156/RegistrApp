import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Curso } from '../models/curso';
import { Clase } from '../models/clase';

@Injectable({
  providedIn: 'root'
})
export class PresenteprofeService {

  private url: string = 'https://www.presenteprofe.cl/api/v1';

  constructor(private http: HttpClient) { }

  // Función para autentucar al usuario
  validLogin(email: string, password: string) {
    let user = {
      "correo": email,
      "password": password
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.url}/auth`, JSON.stringify(user), { headers });
  }

  // Función para traer los cursos del usuario, que en este caso solamente está disponible para profesores
  getCursos(email: string) {
    return this.http.get(`${this.url}/cursos?user=${email}`);
  }

  // Función para registrar a usuario
  registerUser(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.url}/usuarios`, JSON.stringify(user), { headers });
  }

  // Función para registrar curso
  createCourse(curso: Curso, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.post(`${this.url}/cursos`, JSON.stringify(curso), { headers });
  }

  // Función para registrar una clase
  createClass(clase: Clase, token: string, id_curso: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.post(`${this.url}/cursos/${id_curso}/clase`, JSON.stringify(clase), { headers });
  }
}