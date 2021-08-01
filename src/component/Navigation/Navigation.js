import React from 'react';
import { NavLink } from "react-router-dom";
import Routes from "../../Routes";
import './Navigation.scss';


const Navigation = () => {
    return ( 
        <nav>
            <NavLink className="nav-btn" to={Routes.movies}>Home</NavLink>
            <NavLink className="nav-btn" to={Routes.search}>Movies</NavLink>
        </nav>
     );
}
 
export default Navigation;