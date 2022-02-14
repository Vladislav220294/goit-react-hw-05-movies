import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {Link, useRouteMatch} from 'react-router-dom'
import * as Fetch from '../../Fetch'

const HomePage = () => {
    const [movies, setMovies] = useState(null);
    // const {url} = useRouteMatch()
    useEffect(() => {
Fetch.fetchTrendingMovies().then(setMovies) 
    }, [])

    return (<> <h2>Trending today</h2>
        {movies && <ul> {movies.results.map(movie =>
            <li key={movie.id} >  <Link to={`/movies/${movie.id}`}>{ movie.title}</Link> </li>
        )}</ul>}
    </>);
}
 
export default HomePage;