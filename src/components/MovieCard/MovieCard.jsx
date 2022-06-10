import { Link } from 'react-router-dom';

export default function MovieCard({movie, index}) {
    return (
        <>
            <Link to={`/movies/${movie.title}`} className="movie-link">
                <div style={{"background": `url(${movie.poster_path}) no-repeat center center`, "WedkitBackgroundSize": "cover"}} className="card">   
                    <div className="title">
                        <h1>{movie.title}</h1>
                        <h4>Release Date: {movie.release_date}</h4>
                    </div>
                </div>
            </Link>
        </>
    );
}