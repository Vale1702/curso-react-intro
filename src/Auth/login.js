import React from "react";
import { useAuth } from "./auth";
import './style.css'
import { Navigate } from "react-router-dom";

function LoginPage(){
    const auth = useAuth();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = (e) => {
        e.preventDefault();
        auth.login({username, password});
    };

    if(auth.user){
        return <Navigate  to='profile'/>
    }
    
    return(
        <> 
        <h1>Login </h1>
            
        <form onSubmit={login} className="form-container">
            <label> Email address</label>

            <input type="text" placeholder="platzi@example.com"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            
            <label for="password" >Password</label>
            <input type="password" placeholder="*****"
            value={password} 
            onChange={e => setPassword(e.target.value)}
            />

            <button type="submit" value="Login" className="button  button-login"> Login </button>
            <a href="/">Forgot my password</a>
        
        </form>

        </>
    )
}

export {LoginPage};