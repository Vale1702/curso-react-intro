import { NavLink } from "react-router-dom";
import './style.css'

function Menu(){
    return(
        <nav className="container-nav">
            <ul>
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
        to: './blog',
        text: 'Blog',
    });
    routes.push({
        id: 3,
        to: '/profile',
        text: 'Profile',
    });
    routes.push({
        id: 4,
        to: '/login',
        text: 'Login',
    });
    routes.push({
        id: 5,
        to: '/logout',
        text: 'Logout',
    });

export {Menu};