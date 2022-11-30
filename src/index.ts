// Proyecto
// Agenda CRM -> CRUD de clientes
// Clase de cliente
import { Cliente } from "./modelos/cliente"
import chalk from "chalk"
import inquirer from "inquirer"
import axios from "axios"

console.log(chalk.bgBlue("Bienvenid@ al CRM de TypeScript"))

inquirer.prompt([
    {
        message: "Cuál es tu lenguaje favorito",
        name: "lenguaje_favorito",
        default: 'Typescript'
    },
    {
        message: "Qué es la función que más te gusta de Typescript",
        choices: ["Los tipos", "Las clases", "El compilado automático"],
        name: "funcionalidad_favorita_ts"
    }
]).then(answers => console.log(answers))