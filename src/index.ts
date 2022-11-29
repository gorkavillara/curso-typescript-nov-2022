class Persona {
  nombre: string
  edad: number
  constructor(n: string, e: number) {
    this.nombre = n
    this.edad = e
  }

  saluda() {
    console.log(`Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años`)
  }
}

class Alumno extends Persona {
  lenguaje_favorito: string
  nota: number
  constructor(nombre: string, edad: number, lenguaje?: string) {
    super(nombre, edad) // Constructor de la clase padre
    // console.log(lenguaje)
    this.lenguaje_favorito = lenguaje ? lenguaje : "Typescript"
  }

  saluda() {
    console.log(
      `Hola! Mi nombre es ${this.nombre}, soy un alumno, tengo ${this.edad} años y mi lenguaje favorito es ${this.lenguaje_favorito}`
    )
  }

  dimeCualEsTuLenguajeFavorito() {
    console.log(`Mi lenguaje favorito es ${this.lenguaje_favorito}`)
  }
}

const pers1 = new Persona("Gorka", 33)
const alumno = new Alumno("Gorka", 66)

alumno.saluda()
pers1.saluda()
