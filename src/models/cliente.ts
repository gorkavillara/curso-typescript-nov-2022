export class Cliente {
  nombre: string
  email: string
  direccion: string = ''
  numero_telefono?: number | string
  constructor (n: string, e: string) {
    this.nombre = n
    this.email = e
  }
}
