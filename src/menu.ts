import chalk from "chalk";
import inquirer from "inquirer";

import { listaClientes } from "./controladores/controlador-cliente.js";

export const menuPrincipal = async () => {
  let seguir_menu: boolean = true;
  // Dar la bienvenida
  console.log(
    chalk.bgBlueBright("Hola! Bienvenid@ al CRM de terminal con TypeScript")
  );

  while (seguir_menu) {
    console.log(chalk.blueBright("¿Qué tipo de cosas quieres hacer?"));
    const preguntaPrincipal = await inquirer.prompt({
      type: "list",
      choices: [
        "1 - Listar todos los clientes",
        "2 - Añadir un nuevo cliente",
        "3 - Editar un cliente en concreto",
        "4 - Eliminar un cliente",
        "0 - SALIR",
      ],
      name: "pregunta_principal",
    });
    console.log(`La respuesta ha sido ${preguntaPrincipal.pregunta_principal}`);

    if (preguntaPrincipal.pregunta_principal === "0 - SALIR") {
        return seguir_menu = false
    } else if (preguntaPrincipal.pregunta_principal === "1 - Listar todos los clientes") {
        // Lista todos los clientes
        listaClientes()
    }
  }
};
