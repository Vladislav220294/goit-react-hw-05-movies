import { useState, useEffect } from "react";
import * as Fetch from '../../Fetch'

const Reviews = ({movieId}) => {
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
     Fetch.fetchMovieByReviews(movieId).then(setReviews)  
    }, [movieId])

    return (<>{reviews && reviews.results.length !== 0   ? 
        reviews.results.map(review => <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{ review.content}</p>
        </li>)
    : <h3>We dont have any reviews for this movie</h3> }</> );
}
 
export default Reviews;