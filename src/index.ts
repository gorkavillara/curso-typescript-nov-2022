// Qué son las cookies
// document.cookie = "nombre=Gorka;expires=Tue, 29 Nov 2022 12:50:00 GMT"
// const now = new Date()
// console.log(now.toUTCString())
// document.cookie = "nombre=Gorka;max-age=86400"

const valor = {
    nombre: "Miguel"
}

const now = new Date()
const expirationDate = new Date(now.getTime() + 24 * 60 * 60)

document.cookie = `${Object.keys(valor)[0]}=${valor.nombre};expires=${expirationDate.toUTCString()}`

// console.log(document.cookie) // Para obtener la información

//////////////////