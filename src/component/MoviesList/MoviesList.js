import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import MoviePreview from "../../views/MoviePreview";

const MoviesList = ({movies, location}) => {
    return (  
        <ul>
            {
                movies.map(({id, title, name, poster_path}) => (
                    <li key={id}>
                        <NavLink to={{pathname: `/movies/${id}`,
                        state: {
                            from: location,
                        }}}>
                            <MoviePreview title={title} name={name} poster_path={poster_path} />
                            {title || name}
                        </NavLink>
                        
                    </li>
                ))
            }
        </ul>
    );
}
 
export default withRouter(MoviesList);