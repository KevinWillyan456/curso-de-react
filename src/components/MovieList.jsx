import { useState, useEffect } from 'react'
import './MovieList.css'
import { getMovies } from '../services/api'
import { MovieCard } from './MovieCard'

export function MovieList(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const getDataApi = async () => {
            setMovies(await getMovies())
        }
        getDataApi()
    },[])
    return (
        <div className="MovieList">
            {movies.map(movie=><MovieCard movie={movie}/>)}
        </div>
    )
}