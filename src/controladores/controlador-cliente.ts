import axios, { AxiosResponse } from "axios"
import chalk from "chalk"
import inquirer from "inquirer"

import { Cliente } from "../models/cliente.js"

/**
 * obtenClientes -> Devuelve un listado de clientes
 */
export const obtenClientes: () => Promise<Cliente[]> = async () => {
	// const url: string = "https://rickandmortyapi.com/api/character/1"
	const url: string =
		"https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/clientes"
	// Utilizaremos axios para obtener la info
	const respuesta: AxiosResponse = await axios.get(url)
	// console.log(respuesta.data.clientes)
	return respuesta.data.clientes
}

/**
 * listaClientes -> Nos saca por pantalla todos los clientes
 */
export const listaClientes: () => Promise<void> = async () => {
	// Obtener todos los clientes
	const clientes: Cliente[] = await obtenClientes()
	console.log("\n")
	// Sacarnos por pantalla todos los clientes
	clientes.forEach((cliente: Cliente) =>
		console.log(`${cliente.nombre} => Email ${cliente.email}`)
	)
}

export const nuevoCliente = async () => {
	let valido: boolean = false
	do {
		const preguntaNuevoCliente = await inquirer.prompt({
			message: "Nombre del cliente",
			type: "input",
			default: "Mario Casas",
			name: "nombre_cliente"
		})
		const preguntaEmailCliente = await inquirer.prompt({
			message: "Email del cliente",
			type: "input",
			default: "mario@casas.es",
			name: "email_cliente"
		})
		const preguntaTelefonoCliente = await inquirer.prompt({
			message: "Telefono del cliente",
			type: "input",
			default: "+34 666 123 123",
			name: "telefono_cliente"
		})
		const preguntaDireccionCliente = await inquirer.prompt({
			message: "Direccion del cliente",
			type: "input",
			default: "Calle casas, 19",
			name: "direccion_cliente"
		})
		console.log(
			`Nombre: ${preguntaNuevoCliente.nombre_cliente}`,
			`Email: ${preguntaEmailCliente.email_cliente}`,
			`Teléfono: ${preguntaTelefonoCliente.telefono_cliente}`,
			`Dirección: ${preguntaDireccionCliente.direccion_cliente}`
		)
		console.log(chalk.yellow("¿Son estos datos correctos?"))
		const seguirPregunta = await inquirer.prompt({
			message: "Esto es correcto?",
			type: "input",
			default: "s",
			name: "seguir_pregunta"
		})
		if (seguirPregunta.seguir_pregunta === "s") {
			valido = true
			// crear el nuevo cliente
			const cliente: Cliente = new Cliente(preguntaNuevoCliente.nombre_cliente, preguntaEmailCliente.email_cliente)
			// dar de alta el nuevo cliente
		}
	} while (!valido)
}
