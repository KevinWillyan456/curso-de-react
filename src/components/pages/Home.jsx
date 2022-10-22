import { MovieList } from '../MovieList'
import '../../styles/globalStyle.css'

export function Home(){
    return (
        <>
            <h1>Filmes em Cartas</h1>
            <MovieList />
        </>
    )
}