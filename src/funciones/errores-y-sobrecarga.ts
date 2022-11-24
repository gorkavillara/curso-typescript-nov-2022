// Gestión de errores
const checkValidation = (token: number) => {
    if (token > 100) return true
    // Aquí deberíamos poner un error
    throw new EvalError("El token no es válido")
}

checkValidation(120)

type Persona = {
    nombre: string
    edad: number
    analizado?: boolean
}
const personas: Persona[] = [
    {
        nombre: "Rick",
        edad: 58
    },
    {
        nombre: "Morty",
        edad: 13
    }
]

const analizaPersona = (persona: Persona) => ({ ...persona, analizado: true })

// const nuevasPersonas: Persona[] = personas.map((persona: Persona) => {
//     return {
//         ...persona,
//         analizado: true
//     }
// })
const nuevasPersonas: Persona[] = personas.map(analizaPersona)

console.log(nuevasPersonas[0])

// Sobrecarga de funciones
// const sumar = (a: number, b: number) => a + b

// const sumar = (...params: any[]): number => {
//     let suma: number = 0
//     params.forEach((param) => { 
//         if (typeof param !== "number") return
//         suma += param
//     })
//     return suma
// }

// const sumar = (...params: any[]) => params.reduce((acum, val) => typeof val === "number" ? acum + val : acum, 0)
const sumar = (...params: any[]) => {
    const sumaTotal = params.reduce((acum, val) => {
        typeof val === "number" ? acum + val : acum
    }
    , 0)
}

console.log(sumar(1, 2, 9, 12, "Hola", true, [4, 5, 6], 89))