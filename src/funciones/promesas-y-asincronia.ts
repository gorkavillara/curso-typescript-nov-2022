const llamadaApi: () => Promise<string> = async () => {
    // Aquí llamamos a la api
    return new Promise((resolve, reject) => {
        // Si todo va bien
        const numero_aleatorio: number = Math.random()
        console.log(numero_aleatorio)

        const correcto = numero_aleatorio > 0.5
        if (correcto) {
            resolve("Una información")
            return
        }
        reject("ERROR: El número generado ha sido menor que 0.5 así que hay un error")
        return
    })
}

// Resolver promesas -> 2 opciones
// 1 - keyword await
const funcionAsincrona = async() => {
    // try {
    //     const respuesta = await llamadaApi()
    //     console.log(respuesta)
    // } catch(error) {
    //     console.error(error)
    // }
    const respuesta = await llamadaApi().catch(error => {
        // Hacemos lo que queramos
        return console.error(error)
    })
    console.log(respuesta)
}
// funcionAsincrona()


// 2 - then
llamadaApi()
    .then(res => console.log(res))
    .catch(e => console.error(e))
    .finally(() => console.log("He terminado la ejecución"))
