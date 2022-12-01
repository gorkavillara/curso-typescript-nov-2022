// Tipo 2 - Decorador de propiedad
function longMinima(caracteres: number) { // Factory
    return function(target: any, key: any) {
      console.log({ target })
      console.log({ key })
  
      let valor: string
  
      const getter = function() {
        return valor
      }
  
      const setter = function(nuevoValor: string) {
        if (nuevoValor.length < caracteres) {
          Object.defineProperty(target, "error", {
            value: `Tu contraseña debe ser como mínimo de ${caracteres} caracteres`
          })
        }
        valor = nuevoValor
      }
      Object.defineProperty(target, key, {
        set: setter,
        get: getter
      })
    }
  }
  
  
  class Usuario {
    nombre_usuario: string
    // Tenga más de 8 caracteres
    @longMinima(8)
    contrasenya: string
    error?: string
    constructor(n: string, c: string) {
      this.nombre_usuario = n
      this.contrasenya = c
    }
  }
  
  const nuevousuario = new Usuario("gorkavillar", "a")
  
  console.log(nuevousuario)
  console.log(nuevousuario.contrasenya)
  console.log(nuevousuario.error)