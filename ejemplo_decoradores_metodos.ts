// Tipo 3 - Decorador de método

// Decorador -> Pasar por consola el nombre del método que estoy invocando
function logueadorDeFunciones() {
    return function (target: any, key: string, descriptor: any) {
      console.log(`Se acaba de llamar la función: ${key}`)
      return descriptor
    }
  }
  
  class Cuadrado {
    lado: number
  
    constructor(l: number) {
      this.lado = l
    }
  
    @logueadorDeFunciones()
    obtenArea() {
      return this.lado ** 2
    }
  }
  
  const micuadrado: Cuadrado = new Cuadrado(15)
  
  // const area = micuadrado.obtenArea()
  // const area2 = micuadrado.obtenArea()
  
  // console.log({ area })