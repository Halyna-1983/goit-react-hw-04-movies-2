import React from 'react';
import { Route, Switch } from "react-router-dom";
import AppBar from './component/AppBar';
import MoviesView from "./views/MoviesView/MoviesView";
import MoviesDetailsView from "./component/MovieDetailsView";
import SearchView from "./views/SearchView/SearchView";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <AppBar />

      <Switch>
        <Route exact path={Routes.movies} component={MoviesView}/>
        <Route path={Routes.search} component={SearchView}/>
        <Route path={Routes.movieDetails} component={MoviesDetailsView}/>
      </Switch>

    </div>
  )
}
export default App;
