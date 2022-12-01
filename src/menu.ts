import chalk from "chalk";
import inquirer from "inquirer";

export const menuPrincipal = async () => {
  // Dar la bienvenida
  console.log(
    chalk.bgBlueBright("Hola! Bienvenid@ al CRM de terminal con TypeScript")
  );
  console.log(chalk.blueBright("¿Qué tipo de cosas quieres hacer?"));

  const preguntaPrincipal = await inquirer.prompt({
    type: "list",
    choices: [
      "1 - Listar todos los clientes",
      "2 - Añadir un nuevo cliente",
      "3 - Editar un cliente en concreto",
      "4 - Eliminar un cliente",
    ],
    name: "pregunta_principal"
  });
  
  console.log(preguntaPrincipal)
};
