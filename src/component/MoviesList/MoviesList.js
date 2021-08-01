import React from "react";
import { NavLink } from "react-router-dom";
import MoviePreview from "../../views/MoviePreview";

const MoviesList = ({movies}) => {
    return (  
        <ul>
            {
                movies.map(({id, title, name, poster_path}) => (
                    <li key={id}>
                        <NavLink>
                            <MoviePreview title={title} name={name} poster_path={poster_path} />
                            {title || name}
                        </NavLink>
                        
                    </li>
                ))
            }
        </ul>
    );
}
 
export default MoviesList;