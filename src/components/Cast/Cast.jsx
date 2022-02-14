import { useState, useEffect } from "react";
import * as Fetch from '../../Fetch'

const Cast = ({movieId}) => {
    const [cast, setCast] = useState(null);
    useEffect(() => {
     Fetch.fetchMovieByCasts(movieId).then(setCast)  
    }, [movieId])

    return (<>{
        cast.cast.map(cast => <li key={cast.id}>
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
        </li>)
    }</> );
}
 
export default Cast;