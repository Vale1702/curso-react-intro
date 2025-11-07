import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userList } from "../Data/users";

const AuthContext = React.createContext();

function AuthProvider ({children}){
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const login = ({username, password}) =>{
        const isUser = userList.find(u => u.username === username && u.password === password);
        
        if(!isUser){
            alert("Usuario o contraseña incorrectos");
            return;
        }
        setUser({username, isUser:true});
        navigate('/profile');
    };
    
    const logout = ()=>{
        setUser(null);
        navigate('/');
    }

    const auth = {user, login, logout};

    return (
        <AuthContext.Provider value = {auth}> 
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthRoute(props){
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to='/login'/>
    }

    return props.children;
}

export{AuthProvider, useAuth, AuthRoute};