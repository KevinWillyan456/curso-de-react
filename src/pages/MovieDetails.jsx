import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieInfo } from "../services/api"

export function MovieDetails(){
    const [movie,setMovie] = useState(null)
    const {id} = useParams('id')

    useEffect(()=>{
        const getApiData = async() => {
            setMovie(await getMovieInfo(id))
        }
        getApiData()
    },[])
    return (
        <>
            {movie && <img src={movie.images.background} />}
        </>
    )
}