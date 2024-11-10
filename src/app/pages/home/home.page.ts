import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public username: string = '';
  public emailUser: string = '';
  result: string = ''

  async scan(): Promise<void> {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    this.result = result.ScanResult;
  }


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Obtener email de usuario autenticado
    let user = localStorage.getItem("user");
    if (user) {
      this.emailUser = JSON.parse(user).correo;

      // Obtener username
      this.username = JSON.parse(user).nombre
    }
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
