import { Component } from '@angular/core';	// en los import no se ponen la extensiond del archivo

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})

export class FrutaComponent {		// las buenas practicas dicen que los valores van de inicio en el constructor
	nombre :string ;
	listaFruta :string[] ; 	// listaFruta :any , significa que entra todo
	persona :string ;
	edad :number ;
	mayorEdad :boolean ;
	trabajos :string[] ;

	constructor() {
		this.nombre = 'El componente la fruta';
		this.listaFruta = ['naranja','pera', 'manzana','plátano'] ;
		this.persona = 'Fernando';
		this.edad = 38;
		this.mayorEdad = false;
		this.trabajos = ['calzoncillero', 'aguaor', 'bailarín'];

	}
	ngOnInit() {				
		this.holaMundo();
	}

	holaMundo() {
		alert('hola ' + this.persona )
	}
}