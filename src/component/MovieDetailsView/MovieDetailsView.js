import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Api from "../../services/movies-Api";
import InfoContainer from "../InfoContainer";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

class MovieDetailsView extends Component {
    state = { 
        movie: {},
        genreName: '',
        cast: [],
        reviews: [],
     }

async componentDidMount() {
    const id = this.props.match.params.movieId;
        
    const movie = await Api.fetchById(id);
    this.setState({ movie });

    this.setState({ genreName: this.state.movie.genres.map(genre => (genre.name)).join(' ') });

    const cast = await Api.fetchCast(id);
    this.setState({ cast });

    const reviews = await Api.fetchReviews(id);
    this.setState({ reviews });
}

handleGoBack = () => {
    // history.push(location)
}

    render() { 
        const {title, poster_path, id, backdrop_path, vote_average, genres, overview} = this.state.movie;
       
        return ( 
            <>
            <div>
                <button type="button">go back</button>

                <h2>{title}</h2>
                <img src={`${IMG_URL}/${backdrop_path||poster_path}`} alt={`Poster of ${title}`} />
                <p>User score: {vote_average * 10} %</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                {id && <p>{this.state.genreName}</p>}
            </div>

            <div>

                {id && <Route path={this.props.match.path} render={props => {
                    return (
                        <InfoContainer {...props } 
                        cast={this.state.cast}
                        reviews={this.state.reviews}/>
                    )
                }} />}
            </div>
            </>
         );
    };
};
 
export default MovieDetailsView;