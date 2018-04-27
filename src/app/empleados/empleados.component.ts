import { Component } from '@angular/core';
import { Empleado } from './empleado'; 		// me importo empleado del archivo empleado.ts no de 'empleados'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
	title :string ;
	empleado :Empleado;
	trabajadores :Empleado[];	// :Array<Empleado>
  trabajadorExterno :boolean;
  color :string;
  colorSeleccionado :string;

  constructor() { 
  	this.title = "Componente de los empleados";
  	this.empleado = new Empleado('Ismael', 24, 'Web developer', true);
  	this.trabajadores = [
  		new Empleado('Enrique', 26, 'Arduino torturer', true), 
  		new Empleado('Eli', 26, 'Programadora On Fire', true),
  		new Empleado('Migue', 26, 'El que manda en las Bitcoins', false),
  		new Empleado('Fran', 30, 'El caquita', true),
  		new Empleado('Rafa', 30, 'Némesis con diarrea', true)
  	];
    this.trabajadorExterno = false;
    this.color = 'green';
    this.colorSeleccionado  = '#888';
  }

  ngOnInit() {
  	
  }

  cambiarExterno(valor){
    this.trabajadorExterno = valor;
  }

  logColorSeleccionado(){
    console.log(this.colorSeleccionado)
  }
}
