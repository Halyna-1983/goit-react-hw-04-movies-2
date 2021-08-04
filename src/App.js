import React, {Suspense, lazy} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import AppBar from './component/AppBar';
// import MoviesView from "./views/MoviesView/MoviesView";
// import MoviesDetailsView from "./component/MovieDetailsView";
// import SearchView from "./views/SearchView/SearchView";
import Routes from "./Routes";

const MoviesView = lazy(() => import('./views/MoviesView' /* webpackChunkName: "movies-view" */));

const MoviesDetailsView = lazy(() => import('./component/MovieDetailsView' /* webpackChunkName: "movie-details-view" */));

const SearchView = lazy(() => import('./views/SearchView' /* webpackChunkName: "search-view" */),
);

const App = () => {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<h1>...loading</h1>}>

      <Switch>
        {/* <Route exact path={Routes.home} component={MoviesView} /> */}
        <Route exact path={Routes.movies} component={MoviesView}/>
        <Route path={Routes.search} component={SearchView}/>
        <Route path={Routes.movieDetails} component={MoviesDetailsView}/>
        <Redirect to={Routes.home} />
      </Switch>
      
    </Suspense>
    </div>
  )
}
export default App;
