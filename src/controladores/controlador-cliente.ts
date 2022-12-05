import axios, { AxiosResponse } from "axios"

import { Cliente } from "../models/cliente.js"

/**
 * obtenClientes -> Devuelve un listado de clientes
 */
const obtenClientes: () => Promise<Cliente[]> = async () => {
	const url: string = "https://rickandmortyapi.com/api/character/1"
	// Utilizaremos axios para obtener la info
	const respuesta: AxiosResponse = await axios.get(url)
	const info = respuesta.data
	const nombre = info.name
	const email = `${info.name}@${info.name}.com`

	const cliente: Cliente = new Cliente(nombre, email)

	return [cliente]
}

/**
 * listaClientes -> Nos saca por pantalla todos los clientes
 */
export const listaClientes: () => Promise<void> = async () => {
	// Obtener todos los clientes
	const clientes: Cliente[] = await obtenClientes()
	console.log("\n")
	console.log("\n")
	console.log("\n")
	console.log("<input type='button'>Botón</input>")
	// Sacarnos por pantalla todos los clientes
	clientes.forEach((cliente: Cliente) =>
		console.log(`${cliente.nombre} => Email ${cliente.email}`)
	)
}

/**
 * La función sumaDosNumeros suma dos números
 *
 * @param a {number} Primer número para sumar
 * @param b {number} Segundo número para sumar
 * @returns {number} La suma aritmética de a + b
 */
const sumaDosNumeros = (a: number, b: number): number => a + b
