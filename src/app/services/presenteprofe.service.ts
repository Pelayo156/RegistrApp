import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Curso } from '../models/curso';
import { Clase } from '../models/clase';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PresenteprofeService {

  private url: string = environment.apiUrl;

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
  createClass(clase: Clase, token: string, id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.post(`${this.url}/cursos/${id}/clase`, JSON.stringify(clase), { headers });
  }

  // Función para traer información de un curso en específico
  getCourse(id: number, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.get(`${this.url}/cursos/${id}`, { headers });
  }

  // Función para obtener las clases de un respectivo curso
  getClasses(id: number, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.get(`${this.url}/cursos/${id}/clase`, { headers });
  }

  // Función para registrar asistencia del alumno
  registerAttendance(code: string, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.post(`${this.url}/clases/${code}/asistencia`, JSON.stringify(code), { headers });
  }

  // Función para obtener cursos matriculados por el estudiante
  getStudentCourses(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.get(`${this.url}/estudiante/cursos`, { headers });
  }

  // Función para recuperar contraseña
  recoverPassword(email: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.url}/auth/recuperar`, JSON.stringify(email), { headers });
  }
}