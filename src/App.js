import { Route, Switch } from 'react-router-dom';
// import Cast from './components/Cast/Cast';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
// import Reviews from './components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Navigation />
      {/* <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        
        <Route>
          <NotFound />
        </Route>
      </Switch> */}
    </>
  );
};
