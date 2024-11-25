import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public username: string = '';
  public emailUser: string = '';

  // Resultado del código QR escaneado
  public result: string = ''

  // Token del usuario autenticado
  public token: string = '';

  // Cursos matriculados del estudiante
  public cursos: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private alertController: AlertController, private presenteProfeService: PresenteprofeService) { }

  async scan(): Promise<void> {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    this.result = result.ScanResult;

    // Lógica para registrar curso escaneando código QR
    this.presenteProfeService.registerAttendance(this.result, this.token).subscribe((reponse: any) => {
      alert(reponse.message);
    });
  }

  ngOnInit() {
    // Obtener email de usuario autenticado
    let user = localStorage.getItem("user");
    if (user) {
      this.emailUser = JSON.parse(user).correo;

      // Obtener username
      this.username = JSON.parse(user).nombre;

      // Obtener token del usuario
      this.token = JSON.parse(user).token;

      // Obtener cursos matriculados del estudiante
      this.presenteProfeService.getStudentCourses(this.token).subscribe((response: any) => {
        this.cursos = response.cursos;
      });
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Sesión no cerrada');
          },
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            localStorage.removeItem("user");
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
}
