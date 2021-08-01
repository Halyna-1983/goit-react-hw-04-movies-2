import React from 'react';
import { NavLink } from "react-router-dom";
import Routes from "../../Routes";


const Navigation = () => {
    return ( 
        <nav>
            <NavLink to={Routes.movies}>Home</NavLink>
            <NavLink to={Routes.search}>Movies</NavLink>
        </nav>
     );
}
 
export default Navigation;