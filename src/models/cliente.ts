export class Cliente {
	nombre: string
	email: string
	direccion: string
	numero_telefono?: number | string
	constructor (n: string, e: string, d: string = "", num?: number | string) {
		this.nombre = n
		this.email = e
		this.direccion = d
		this.numero_telefono = num
	}
}
