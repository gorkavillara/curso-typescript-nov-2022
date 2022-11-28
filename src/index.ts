// Local Storage y Session Storage
type Alumno = {
    nombre: string
    apellido: string
    edad: number
}

const yo: Alumno = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 24
}

// localStorage.setItem("yo", yo.nombre)

// console.log(localStorage.getItem("yo"))

// localStorage.setItem("yo", JSON.stringify(yo))

// console.log(localStorage.getItem("yo"))
// console.log(JSON.parse(localStorage.getItem("yo")).nombre)

// localStorage.removeItem("yo")

// localStorage.clear()

sessionStorage.setItem("yo", JSON.stringify(yo))

console.log(sessionStorage.getItem("yo"))
console.log(JSON.parse(sessionStorage.getItem("yo")).nombre)

sessionStorage.removeItem("yo")

sessionStorage.clear()