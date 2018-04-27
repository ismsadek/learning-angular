import { Component } from '@angular/core';
import { Moto } from './moto'; 

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent {
	title :string ;
	moto :Moto;
	motos :Moto[];
  
  constructor() {
  	this.title = "Motitos nuevas chavales"
  	this.moto = new Moto('Yamaha','R6',600,12000);
  	this.motos = [
  		new Moto('Honda','CBR',1000,18000),
  		new Moto('Suzuki','GSX',600,10500), 
			new Moto('Kawasaki','Ninja',600,13000), 
			new Moto('Kawasaki','Z-750',750,14999), 
  	]
  		
  }

  ngOnInit() {
  }

}
