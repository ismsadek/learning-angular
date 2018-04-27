import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrutaComponent } from './fruta/fruta.component';
import { FormsModule }  from '@angular/forms'



import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MotosComponent } from './motos/motos.component';
 // cada vez que construya un nuevo component se llamara 'Name'Component
 // ng generate component 'empleados' 


@NgModule({							// es un objeto JSON donde se hace la declaracion de los oudlos que va a utilizar mi app
  declarations: [				// si hago un nuevo modulo y no lo registro aqui, no funcionará
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    MotosComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
