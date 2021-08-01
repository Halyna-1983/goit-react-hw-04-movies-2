import React, { Component } from 'react';
import Api from "../../services/movies-Api";

class MovieDetailsView extends Component {
    state = { 
        movie: {},
     }

async componentDidMount() {
    const id = this.props.match.params.movieId;
    
    const movie = await Api.fetchById(id);
    this.setState({ movie });
}

    render() { 
        return ( 
            <div>
<h1>this is detail view</h1>
<h2>{this.state.movie.title}</h2>
            </div>
         );
    }
}
 
export default MovieDetailsView;