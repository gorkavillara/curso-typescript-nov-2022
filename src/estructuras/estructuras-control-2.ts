const numeros: number[] = [0, 1, 2, 3, 4, 5]

console.log(numeros[4])

// Bucle while
let condicion: boolean = true
while (condicion) {
    console.log("Esto se va a ejecutar hasta que condicion === false")
    condicion = false
}

let num: number = 0
while (num < 10) {
    console.log(`El número ${num} es menor que 10`)
    num++
}

// Bucle do..while
do {
    // sentencia
    console.log("Se ha ejecutado")
} while (condicion)

// Uso de continue
num = 0
while (num < 10) {
    num++
    if (num < 5) continue
    console.log(`El número ${num} es menor que 10`)
}

for (let i = 0; i < 10; i++) {
    if (i < 5) {
        continue
    }
    console.log(`En el FOR, el número ${i} es menor que 10`)
}

num = 0
while (num < 10) {
    num++
    if (num === 5) break
}
console.log(num)

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(i)
        break
    }
}