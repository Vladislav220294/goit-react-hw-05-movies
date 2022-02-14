import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import * as Fetch from '../../Fetch'

const Credits = ({ movieId }) => {
    const {url} = useRouteMatch()
    const [casts, setCasts] = useState(null);
    useEffect(() => {
     Fetch.fetchMovieByCasts(movieId).then(setCasts)  
    }, [movieId])
// console.log(casts);
    return (<>{casts &&
        casts.cast.map(cast => <li key={cast.id}>
            <img src={`https://image.tmdb.org/t/p/w100${cast.profile_path}`} alt="" width='50px' height='50px' />
            
            <h3>{cast.name}</h3>
            
            <p>{cast.character}</p>
        </li>)
    }</> );
}
 
export default Credits;