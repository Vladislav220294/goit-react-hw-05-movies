import { useEffect, useState, lazy } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useParams,
  useRouteMatch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as Fetch from '../../Fetch';

const Credits = lazy(() => import('../Credits/Credits'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetailsPage = () => {
  const history = useHistory()
  const location = useLocation()
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url } = useRouteMatch();

  const goBack = () => {
    history.push(location.state.from)
  }
  useEffect(() => {
    Fetch.fetchMovieByDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <button onClick={goBack}
            // to={'/'}
            style={{
              margin: '10px',
              display: 'block',
              width: '80px',
              textDecoration: 'none',
              backgroundColor: 'brown',
              color: 'black',
              borderRadius: '5px',
            }}
          >
            Go back
          </button>
          <div key={movieId} style={{ display: 'flex' }}>
            <div style={{ margin: '10px' }}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt=""
              />
            </div>
            <div style={{maxWidth: "800px"}}>
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
            <li>
              <NavLink to={{pathname:`${url}/credits`, state: {from: location.state?.from || '/'}}}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={{pathname:`${url}/reviews`, state: {from: location.state?.from || '/'}}}>Reviews</NavLink>
            </li>
          </ul>
          <hr />
          {movie && (
            <Route path={`${url}/credits`}>
              <Credits movieId={movieId} />
            </Route>
          )}
          {movie && (
            <Route path={`${url}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          )}
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
