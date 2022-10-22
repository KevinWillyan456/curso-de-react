import './MovieCard.css'

export function MovieCard({movie}){
    return (
        <article className="MovieCard">
            <img src={movie.images.poster} />
        </article>
    )
}