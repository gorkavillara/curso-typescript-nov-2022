// Los decoradores afectan únicamente a todo el entorno de las clases
// Tipo 1 - Decorador de clase
type Constructor = { 
    new (...args: any[]): {}
  }
  
  function alumnoMuyListo<T extends Constructor>(constructor: T) {
    console.log(constructor)
    return class extends constructor {
      lenguaje_favorito = "TypeScript"
    }
  }
  
  @alumnoMuyListo
  class Alumno {
    nombre: string
    edad: number
    lenguaje_favorito?: string
    constructor(n: string, e: number, l?: string) {
      this.nombre = n
      this.edad = e
      this.lenguaje_favorito = l
    }
  }
  
  const alumno: Alumno = new Alumno("Gorka", 29)
  console.log(alumno)
  console.log(alumno.lenguaje_favorito)