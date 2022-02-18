import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as Fetch from '../../Fetch';

const HomePage = () => {
  const location = useLocation()
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    Fetch.fetchTrendingMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {' '}
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {' '}
          {movies.results.map(movie => (
            <li key={movie.id}>
              {' '}
              <Link to={{ pathname: `/movies/${movie.id}`, state: { from: location}}}>{movie.title}</Link>{' '}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HomePage;
