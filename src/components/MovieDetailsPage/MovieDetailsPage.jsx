import { useEffect, useState } from "react";
import { useParams, useMatch, Route, NavLink } from "react-router-dom";
import * as Fetch from '../../Fetch'
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";



const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const { url } = useMatch();

    useEffect(() => {
    Fetch.fetchMovieByDetails(movieId).then(setMovie)
}, [movieId])

    return (<>
        {movie && <>
            <button type="button">Go back</button>
            <div key={movieId}>
                <img src={movie.backdrop_path} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>User scores: {+movie.vote_average * 100}%</p>
                
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres[0].name}</p>
                
            </div>
            <hr />
            <h3>Additional information</h3>
            <ul>
                <li><NavLink to={`${url}/credits`}>Cast</NavLink></li>
                <li><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>
            </ul>
            <hr />
            {movie && <Route path='/movies/:movieId/credits'><Cast movieId={movieId}/></Route>}
            {movie && <Route path='/movies/:movieId/reviews'><Reviews movieId={movieId}/></Route>}
        </>}
    </>  );
}
 
export default MovieDetailsPage;