import axios from "axios"

const llamarApi = async () => {
    const url: string = "https://swapi.dev/api/people/20"
    // axios.get(url)
    //     .then(respuesta => console.log(respuesta))
    //     .catch(error => console.error(error))
    //     .finally(() => console.log("Se ha realizado la llamada satisfactoriamente"))

    const respuesta = await axios.get(url)
    console.log(respuesta)
}

llamarApi()