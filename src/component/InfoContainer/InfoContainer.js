import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";
import Cast from "../Cast";
import Reviews from "../Reviews";


class InfoContainer extends Component {
    state = { 
        pathState: {},
     }

    componentDidMount () {
        this.setState({pathstate: this.props.location?.state})
    }

    render() { 
        const {match, cast, reviews} = this.props;
        return (  
            <>
            <h3>Additional Information</h3>
            <ul>
                <li>
                    <NavLink to={{pathname: `${match.url}/cast`, state: {from: this.state.pathState.from}}}>Cast</NavLink>
                </li>

                <li><NavLink to={{pathname: `${match.url}/reviews`, state: {from: this.state.pathState.from}}}>Reviews</NavLink>
                </li>
            </ul>

            <div>
                {cast && <Route path={`${match.url}/cast`} render = {
                    () => {
                        return <Cast cast={ cast } />
                    }
                } /> }

                {reviews && <Route path={`${match.url}/reviews`} render = {
                    () => {
                        return <Reviews reviews={ reviews } />
                    }
                } /> }
            </div>
            </>
        );
    }
}
 
export default InfoContainer;