import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './components/MoviesPage/MoviesPage';
// import Navigation from './components/Navigation/Navigation';
// import NotFound from './components/NotFound/NotFound';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage'),
);
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Navigation />
        <Switch>
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
        </Switch>
      </Suspense>
    </>
  );
};
