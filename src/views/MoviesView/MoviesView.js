import React, { Component } from "react";
import Api from "../../services/movies-Api";
import MoviesList from "../../component/MoviesList";



class MoviesView extends Component {
	state = {
		movies: [],
	}
	
	async componentDidMount() {
		const movies = await Api.fetchMovies()

		this.setState({ movies });
		
}

	render() { 
		return (
			<div>
				<h1>Trending today</h1>
				<MoviesList movies={this.state.movies}/>
			</div>
		 );
	}
}
 
export default MoviesView;