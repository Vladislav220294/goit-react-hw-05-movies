import { useEffect, useState } from 'react';
import q from 'query-string'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as Fetch from '../../Fetch';
const MoviesPage = () => {
  const location = useLocation();
  const history = useHistory()
  const {query} = q.parse(location.search)
  const [inputValue, setSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const onSearch = e => {
    const { value } = e.currentTarget;
    setSearch(value.toLowerCase());
  };
  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    history.push({pathname: '/movies', search: '?query=' + inputValue})
    Fetch.fetchMovieByName(inputValue)
      .then(setMovies)
      .catch(error => console.log(error));
    setSearch('');
  };
  useEffect(() => {
   query &&  Fetch.fetchMovieByName(query)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [query])
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input type="text" onChange={onSearch} value={inputValue} />
        <button type="submit">Submit</button>
      </form>
      {movies &&
        movies.results.map(movie => (
          <li key={movie.id}>
            <Link to={{ pathname: `/movies/${movie.id}`, state: { from: location}}}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
};

export default MoviesPage;
