import './style.css'
import { useAuth } from "./auth";

function LogoutPage(){
    const auth = useAuth();

    const logout = (e) =>{
        e.preventDefault();
        auth.logout();
    };
    return(
        <> 
        <h1>Logout </h1>
            
        <form onSubmit={logout} className="form-container">
            <label> ¿:Seguro que quieres salir?</label>

            <button type="submit" value="Logout" className="button button-logout"> Salir </button>
        
        </form>

        </>
    )
}

export {LogoutPage}; 