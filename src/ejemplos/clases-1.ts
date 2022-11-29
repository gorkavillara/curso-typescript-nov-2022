// Clases en Typescript
type Persona = {
    nombre: string,
    edad: number,
    obtenEdad?: () => number
}
const persona: Persona = {
    nombre: "Gorka",
    edad: 32,
    obtenEdad: () => 32
}

const persona2: Persona = {
    nombre: "Gorka",
    edad: 32
}