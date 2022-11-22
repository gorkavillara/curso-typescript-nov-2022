// Sentencias if-else
const num: number = 5

if (num < 10) {
    console.log(`El número ${num} es menor que 10`)
} else if (num > 25) {
    console.log(`El número ${num} es mayor que 25`)
} else {
    console.log(`El número no es ni mayor que 25 ni menor que 10`)
}

// Sentencia switch
const personaje: { nombre: string, apellido: string } = {
    nombre: "Anakin",
    apellido: "Skywalker"
}

const juzgaApellido = (personaje: { nombre: string, apellido: string }) => {
    let solucion: string
    switch (personaje.apellido.length) {
        case 1 || 2:
            solucion = "El apellido es muy corto"
            break
        case 5:
            solucion = "El apellido es relativamente corto"
            break
        default:
            solucion = "El apellido es correcto"
            break
    }
    return solucion
}

// Bucles for
for (let i: number = 0; i < 10; i++) {
    const element: number = i;
    console.log(element)
}

type Personaje = {
    nombre: string
    apellido: string
    edad: number
}

const personajes: Personaje[] = [
    {
        nombre: "Gorka",
        apellido: "Villar",
        edad: 35
    },
    {
        nombre: "Miguel",
        apellido: "Díaz",
        edad: 31
    },
    {
        nombre: "Miguel",
        apellido: "Hernández",
        edad: 33
    },
    {
        nombre: "César",
        apellido: "Puente",
        edad: 25
    },
    {
        nombre: "Eva",
        apellido: "Domínguez",
        edad: 24
    },
    {
        nombre: "Hugo",
        apellido: "Valer",
        edad: 20
    }

]

// Métodos de arrays
// forEach
personajes.forEach((personaje: Personaje) => {
    console.log(personaje.nombre)
})
// filter
const nuevosPersonajes: Personaje[] = personajes.filter((personaje: Personaje) => {
    return personaje.edad > 30
})
// map
const nuevosPersonajes2: Personaje[] = personajes.map((personaje: Personaje) => {
    return {
        nombre: personaje.nombre + '2',
        apellido: personaje.apellido + '2',
        edad: personaje.edad + 10
    }
})

console.log(nuevosPersonajes)
console.log(nuevosPersonajes2)

// For...in para objetos
for (let prop in personajes[0]) {
    console.log(`propiedad: ${prop}, valor: ${personajes[0][prop]}`)
}

// For...of para arrays
for (let personaje of personajes) {
    console.log({ personaje })
}