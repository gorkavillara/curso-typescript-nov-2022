export type Cliente = {
    nombre: string
    apellidos?: string
    email: string
    activo: boolean
    direcciones?: Direccion[]
    web?: string[] | string
}

type Direccion = {
    calle: string
    cpostal: number
    direccion_adicional?: string
    "num-portal"?: number
}

// const objeto = {
//     nombre: "Cubo",
//     "num-portal": 5
// }

// objeto.nombre
// objeto["num-portal"]

// type modelos = {
//     cliente: Cliente
//     direccion: Direccion
// }

// export default modelos