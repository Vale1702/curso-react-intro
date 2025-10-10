import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav>
            <ul>
                 <li>
                    <h2>Navegación con  Link  </h2>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/profile'> Profile</Link>
                </li> 

                 <li>
                    <h2>Navegación con NavLink</h2>                    
                <NavLink 
                    style = {({ isActive }) =>({
                        color: isActive ? 'red' : "white",
                    })}
                    to='/'> Home</NavLink>
                </li> 
               <li>
                <NavLink to='/blog'> Blog</NavLink>
                </li> 
               <li>
                <NavLink to='/profile'> Profile</NavLink>
                </li>   

                <h2>Navegación con  Route  </h2>
                {routes.map( route => (
                    <li key = {route.id}>
                        <NavLink
                        style = {({ isActive }) =>({
                            color: isActive ? 'red' : "white",
                        })}
                        to={route.to} 
                        >
                            {route.text}
                        </NavLink>
                    </li>)
             )}

            </ul>
        </nav>
    )
}
//Se genera un array de rutas que se quieran randerizar y se insertan las rutas mediante un objeto, uno por cada distinta ruta donde se quiera navegar.
    const routes = [];
    routes.push({
        id:1,
        to: '/',
        text: 'Home',
    });
    routes.push({
        id: 2,
        to: '/blog',
        text: 'Blog',
    });
    routes.push({
        id: 3,
        to: '/profile',
        text: 'Profile',
    });

export {Menu};