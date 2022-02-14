import { useEffect, useState } from "react";
import { useParams, useRouteMatch, Route, NavLink,  Link } from "react-router-dom";
import * as Fetch from '../../Fetch'
import Credits from "../Credits/Credits";
import Reviews from "../Reviews/Reviews";



const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const { url } = useRouteMatch();

    useEffect(() => {
    Fetch.fetchMovieByDetails(movieId).then(setMovie)
}, [movieId])

    return (<>
        {movie && <>
            <Link to={'/'} style={{margin: "10px", display: "block", width: "80px", textDecoration: "none", backgroundColor: "brown", color: "black", borderRadius: "5px" }}>Go back</Link>
            <div key={movieId} style={{ display: "flex" }}>
                <div style={{margin: "10px"}}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='' /></div>
                <div>
                <h2>{movie.title}</h2>
                <p>User scores: {+movie.vote_average * 10}%</p>
                
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres[0].name}</p>
                </div>
            </div>
            <hr />
            <h3>Additional information</h3>
            <ul>
                <li><NavLink to={`${url}/credits`}>Cast</NavLink></li>
                <li><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>
            </ul>
            <hr />
            {movie && <Route path={`${url}/credits`}><Credits movieId={movieId}/></Route>}
            {movie && <Route path={`${url}/reviews`}><Reviews movieId={movieId}/></Route>}
        </>}
    </>  );
}
 
export default MovieDetailsPage;