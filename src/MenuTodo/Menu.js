import { NavLink } from "react-router-dom";
import {useAuth} from '../Auth/auth'
import './style.css'

function Menu(){
    const auth = useAuth();

    return(
        <nav className="container-nav">
            <ul>
                <h2>Navegación con  Route  </h2>
                    {routes.map( route =>{
                        if(route.publicOnly && auth.user) return null;
                        if(route.private && !auth.user) return null;
                        return (
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
                    } 
                )}
            </ul>
        </nav>
    )
}

    const routes = [];
    routes.push({
        id:1,
        to: '/',
        text: 'Home',
        private: false,
    });
    routes.push({
        id: 2,
        to: './blog',
        text: 'Blog',
        private: false,
    });
    routes.push({
        id: 3,
        to: './todo',
        text: 'Todos',
        private: false,
    });
    routes.push({
        id: 4,
        to: '/profile',
        text: 'Profile',
        private: true,
    });
    routes.push({
        id: 5,
        to: '/login',
        text: 'Login',
        private: false,
        publicOnly: true,
    });
    routes.push({
        id: 6,
        to: '/logout',
        text: 'Logout',
        private: true,
    });

export {Menu};