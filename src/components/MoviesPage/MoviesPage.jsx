import { useState } from "react";
import { Link } from "react-router-dom";
import * as Fetch from '../../Fetch'
const MoviesPage = () => {
    const [inputValue, setSearch] = useState('');
    const [movies, setMovies] = useState(null)
    const onSearch = (e) => {
        const { value } = e.currentTarget;
        setSearch(value.toLowerCase())

    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') { return };
        Fetch.fetchMovieByName(inputValue).then(setMovies)
        setSearch('')
    }
    return (<>
        <form action="" onSubmit={onSubmit}>
            <input type="text"
                onChange={ onSearch}
                value={ inputValue}/>
            <button type='submit' >Submit</button>
        </form>
        {movies && movies.results.map(movie => <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title }</Link></li>)}
    </>);
}
 
export default MoviesPage;