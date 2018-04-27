export class Empleado {			// en los archivos de modelo es donde interesa mas tipar
// 	nombre :string;					// esta es la forma tradicional de Angular, ahora abajo la hacemos modo typeScript
// 	edad :number;
// 	constructor(nombre, edad) {
// 		this.nombre = nombre;
// 		this.edad = edad;
// 	}
	constructor(
		public nombre :string,		//necesitamos añadir la clase public para que se muestren en consola el objeto
		public edad :number,
		public cargo: string,
		public contratado :boolean
		) {}
}