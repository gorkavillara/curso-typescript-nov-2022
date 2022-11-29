class Persona {
  nombre: string
  edad: number

  constructor(n: string, e: number) {
    this.nombre = n
    this.edad = e
  }

  describe() {
    console.log(
      `Soy una persona, tengo ${this.edad} años y me llamo ${this.nombre}`
    )
  }
}

class Alumno extends Persona {
  lenguaje_favorito: string

  constructor(n: string, e: number, l: string) {
    super(n, e)
    this.lenguaje_favorito = l
  }

  describe() {
    console.log(
      `Soy un alumno, tengo ${this.edad} años, me llamo ${this.nombre} y mi lenguaje favorito es ${this.lenguaje_favorito}`
    )
  }
}

const per = new Persona("Gorka", 32)
const al = new Alumno("Gorka", 32, "Typescript")

per.describe()
al.describe()
