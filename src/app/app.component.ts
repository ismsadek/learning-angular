import { Component } from '@angular/core';


@Component({														// es el decorador 
  selector: 'app-root',									
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendiendo Angular';
}


// el app.component.ts es el cque controla la aplicacion 
// los componentes no son mas que controladores
// el modulo engloba todos los componentes