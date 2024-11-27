import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';


// importar librería para código QR
import { QRCodeModule } from 'angularx-qrcode';
import {QrScannerService} from "./services/qr-scanner.service"; 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, QRCodeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideHttpClient(), qrScannerService()],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initQrScannerService(qrScannerService: QrScannerService) {
  return () => qrScannerService.init();
}

export function qrScannerService() {
  return {
    provide: APP_INITIALIZER,
    useFactory: initQrScannerService,
    deps: [QrScannerService],
    multi: true,
  };
}
