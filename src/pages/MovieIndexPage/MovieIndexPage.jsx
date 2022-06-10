import MovieCard from '../../components/MovieCard/MovieCard';
import './MovieIndexPage.css';

export default function MovieIndexPage({movies}) {
    return (
        <div className="container">
                {movies.map((m, idx) => (
                <MovieCard movie={m} index={idx} />
                ))}
            <h3>{movies.title}</h3>
        </div>
    );
}