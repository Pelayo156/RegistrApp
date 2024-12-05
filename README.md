# RegistrApp

RegistrApp es una aplicación diseñada para facilitar el proceso de asistencia en la sala de clases.  Los profesores pueden generar un código QR que los estudiantes escanean para marcar su asistencia de manera automática y eficiente.


### Características principales

- Los docentes pueden generar un QR único para la clase.
- Los estudiantes escanean el código para registrar su asistencia.
- La aplicación guarda automáticamente los registros.

### Herramientas utilizadas
La aplicación fue creada con las siguientes tecnologías.
- Ionic CLI
- Node.js
- Angular CLI
- Ionic Framework
- Capacitor
- Android Studio

## Instalación
Para la instalación de esta aplicación deberá seguir los siguientes pasos. 

1. Clone este repositorio.
   ```bash
   git clone https://github.com/Pelayo156/RegistrApp.git
   ```
2. Navegue al directorio del proyecto:
   ```bash
   cd RegistrApp
   ```
3. Deberá instalar las dependencias necesarias.
   ```bash
   npm install
   ```
4. Ejecutelo en el terminal.
   ```bash
   ionic serve
   ```
## Enlazar proyecto a Android studio
Para iniciar el proyecto en Andriod studio debes seguir los siguientes pasos.
1. En el terminal debe ejecutar el siguiente código para construcción de la app (www):
   ```bash
   ionic build --prod
   ```
2. Sincronización del proyecto con Android studio:
   ```bash
   ionic capacitor sync android
   ```
3. Utilice el siguiente comando para abrir Android Studio desde el terminal:
   ```bash
   npx cap open android
   ```
En Android studio para construir la APK sigue las indicaciones:
Dirigirse al Menú > seleccionar Build Bundle(s) / APK(s) > finalmente seleccionar Build APK(s).

### APK
Para descargar la apk, seguir el enlace:
``` bash
https://github.com/Pelayo156/RegistrApp/tree/520a9c497c319b0db2ca2b8cedc0b3acf28787f2/APK
```
