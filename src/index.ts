import axios, { AxiosResponse } from "axios"

const obtenPersonaje = async () => {
    const url: string = "https://swapi.dev/api/people/1"
    const data: AxiosResponse<any, any> = await axios.get(url)
    console.log(data.data)
    // Comentario
}

obtenPersonaje()