import axios from 'axios'

const api = axios.create({
    baseURL: "http://10.10.32.8:8087"
})

export async function getMovies(){
    let response = await api.get('movies')
    return response.data
    console.log(response)
}