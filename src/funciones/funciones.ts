// Funciones 1.0
// function sumar(a: number, b: number): number {
//     return a + b
// }

// Funciones 2.0 - Declaración explícita
// const sumar = function(a: number, b: number): number {
//     return a + b
// }

// Funciones 3.0 - ES6 en adelante - Funciones de tipo flecha
// const sumar = (a: number, b: number): number => {
//     return a + b
// }

// Funciones 3.1 - ES6 en adelante - Funciones tipo flecha con return implícito
const sumar = (a: number, b: number): number => a + b;

console.log(sumar(4, 9));

// Paso por valor vs paso por referencia
let a: number = 1;
let b: number = a;

b = 5;

console.log(`a: ${a}`);
console.log(`b: ${b}`);

let str_a: string = "Hola";
let str_b: string = str_a;

str_b = "Adiós";

console.log(`str_a: ${str_a}`);
console.log(`str_b: ${str_b}`);

let arr_a: number[] = [1, 2];
let arr_b: number[] = arr_a;

let copia_arr_a: number[] = [...arr_a]
console.log(copia_arr_a)

arr_b.push(3);

console.log(`arr_a: ${arr_a}`);
console.log(`arr_b: ${arr_b}`);
console.log(`copia_arr_a: ${copia_arr_a}`)

type Objeto = {
  ancho: number;
  alto: number;
};

let obj_a: Objeto = { ancho: 5, alto: 10 };
let obj_b: Objeto = obj_a;

obj_b.alto = 20;

console.log(`obj_a: ${obj_a.alto}`);
console.log(`obj_b: ${obj_b.alto}`);

// Operador spread ...

// let copia_obj_a: Objeto = { alto: obj_a.alto, ancho: obj_a.ancho };
let copia_obj_a: Objeto = { ...obj_a }
copia_obj_a.alto = 10

console.log(`copia_obj_a: ${copia_obj_a.alto}`)
console.log(`obj_a: ${obj_a.alto}`);

// let alto = copia_obj_a.alto
// let ancho = copia_obj_a.ancho

// Deconstrucción
// let alto = copia_obj_a.alto
// let ancho = copia_obj_a.ancho
let { alto, ancho } = copia_obj_a
console.log(alto)
console.log(ancho)