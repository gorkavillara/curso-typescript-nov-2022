const num1: number = 2;
const num2: number = 6;

// function suma(a: number, b: number) {
//     return a + b
// }

// var -> globales, variables
// let -> locales, variables
// const -> locales, constantes

// const suma = function(a: number, b: number) {
//     return a + b;
// }

// Función de tipo flecha (arrow function)
// const suma = (a: number, b: number) => {
//     return a + b;
// }

const suma = (a: number, b: number) => a + b

console.log(`La suma de los dos números en función es ${suma(num1, num2)}`)