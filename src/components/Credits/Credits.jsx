import { useState, useEffect } from "react";
import * as Fetch from '../../Fetch'

const Credits = ({ movieId }) => {
    
    const [casts, setCasts] = useState(null);
    useEffect(() => {
     Fetch.fetchMovieByCasts(movieId).then(setCasts).catch(error => console.log(error))  
    }, [movieId])

    return (<>{casts  &&
        casts.cast.map(cast => <li key={cast.id}>
            <img src={cast.profile_path && `https://image.tmdb.org/t/p/w45${cast.profile_path}`} alt="" width='50px' height='50px' />
            
            <h3>{cast.name}</h3>
            
            <p>{cast.character}</p>
        </li>) 
    }</> );
}
 
export default Credits;