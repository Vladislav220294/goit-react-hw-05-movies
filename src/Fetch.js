const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = ' 6603b3505d8dff735b697cdd8dfb31e0';
async function Fetch(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return Fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}
export function fetchMovieByName(query) {
  return Fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`);
}
export function fetchMovieByDetails(movie_id) {
  return Fetch(`${BASE_URL}/movie/${movie_id}?api_key=${KEY}`);
}
export function fetchMovieByCasts(movie_id) {
  return Fetch(`${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}`);
}
export function fetchMovieByReviews(movie_id) {
  return Fetch(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}`);
}
