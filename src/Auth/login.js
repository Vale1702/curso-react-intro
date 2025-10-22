import React from "react";
import { useAuth } from "./auth";
import './style.css'

function LoginPage(){
    const auth = useAuth();
    const [username, setUsername] = React.useState('');

    const login = (e) => {
        e.preventDefault();
        auth.login({username});
    };

    return(
        <> 
        <h1>Login </h1>
            
        <form onSubmit={login} className="form-container">
            <label> Email address</label>
            <input type="text" placeholder="platzi@example.cm"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            {/* 
            <label for="password" >Password</label>
            <input type="password" id="password" placeholder="*********" /> */}

            <button type="submit" value="Login" className="button  button-login"> Login </button>
            <a href="/">Forgot my password</a>
        
        </form>

        </>
    )
}

export {LoginPage};