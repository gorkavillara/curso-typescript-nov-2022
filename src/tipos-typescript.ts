import { Cliente } from "./models"

// Aquí ponemos el comentario que queramos -> Sólo de una línea

/*
    Este es un comentario multilínea 
    CI -> Continuous Integration -> Mergeado automático de código
    CD -> Continuous Delivery -> Subida a producción automática
    Hasta que no exista el cierre del comentario, seguimos como comentario
*/

// Tipos primitivos
const num: number = 12.6
const nombre: string = "Eva"
const encendido: boolean = true

// Comentar/Descomentar una/varias líneas Ctrl + ç

// Strings de tipos primitivos
const numeros: number[] = [1, 2, 3, 4, 5]
const nombres: string[] = ["Miguel", "Eva", "César", "Hugo"]
const estados: boolean[] = [true, false, true]

let variable: any
let variables: any[]

const funcionPrueba = (a, b) => a + b

// Tipos personalizados / Interfaces
type Persona = {
    nombre: string
    apellido: string
    edad: number
    direccion?: string
    obtenNombre?: () => string
}

// interface IPersona {
//     nombre: string
//     apellido: string
//     edad: number
//     direccion?: string
//     obtenNombre?: () => string
// }

const persona: Persona = {
    nombre: "Hugo",
    apellido: "Valer",
    edad: 20,
    direccion: "78"
}

const persona2: Persona = {
    apellido: "Villar",
    nombre: "Gorka",
    edad: 35
}

type Nombre = {
    nombre: string
}

type Apellido = {
    apellido: string
}

type Edad = {
    edad: number
}

type Alumno = Nombre & Apellido & Edad

const nuevoAlumno: Alumno = {
    nombre: "César",
    apellido: "Puente",
    edad: 25
}

const nuevoCliente: Cliente = {
    nombre: "Martín",
    activo: true,
    email: "martin@imaginagroup.com"
}