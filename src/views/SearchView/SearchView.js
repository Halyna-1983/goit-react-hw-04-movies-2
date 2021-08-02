import React, { Component } from 'react';
import SearchForm from "../../component/SearchForm";
import Api from "../../services/movies-Api";
import MoviesList from "../../component/MoviesList";


class SearchView extends Component {
    state = { 
        searchQuery: '',
        movies: [],
     }

     componentDidMount() {
         if (this.props.location?.state?.searchQuery) {
             this.setState({ searchQuery: this.props.location?.state?.searchQuery });
         }
     }

     componentDidUpdate(prevProps, prevState) {
         if (prevState.searchQuery !== this.state.searchQuery) {
             this.fetchMovie();
         }
     }

     onChangeQuery = query => {
     this.setState({ searchQuery: query });
     this.props.history.push({
         pathname: this.props.location.pathname,
         search: `query=${query}`,
         state: {searchQuery: query}
    })
    }

     fetchMovie = async() => {
         const movies = await Api.searchMovies(this.state.searchQuery)
         this.setState({ movies });
     }

    render() { 
        return ( 
            <div>
                <h1> Search movies</h1>
                <SearchForm onSubmit={this.onChangeQuery}/>
                <MoviesList movies={this.state.movies}/>
            </div>
         );
    }
}
 
export default SearchView;