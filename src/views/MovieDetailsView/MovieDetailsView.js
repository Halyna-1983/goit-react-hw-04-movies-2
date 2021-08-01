import React, { Component } from 'react';
import Api from "../../services/movies-Api";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

class MovieDetailsView extends Component {
    state = { 
        movie: {},
        genreName: '',
     }

async componentDidMount() {
    const id = this.props.match.params.movieId;
        
    const movie = await Api.fetchById(id);
    this.setState({ movie });

    this.setState({ genreName: this.state.movie.genres.map(genre => (genre.name)).join(' ') });
}

    render() { 
        const {title, poster_path, backdrop_path, vote_average, genres, overview} = this.state.movie;
       
        return ( 
            <div>
                <h2>{title}</h2>
                <img src={`${IMG_URL}/${backdrop_path||poster_path}`} alt={`Poster of ${title}`} />
                <p>User score: {vote_average * 10} %</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{this.state.genreName}</p>
                
            </div>
         );
    }
}
 
export default MovieDetailsView;