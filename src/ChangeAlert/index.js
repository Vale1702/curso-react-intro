import React from "react";
import './ChangeAlert.css'
import { TfiReload  } from "react-icons/tfi";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({synchronize}){
const {show, toggleShow} = useStorageListener(synchronize);
    if(show){
        return ( 
        <div className="Alert-container">
            <p> Ups!! al parecer hubo cambios.</p>
            <button 
            onClick={()=> toggleShow(false)}
            > 
            Recargar  <TfiReload/>
            </button>
        </div>
        );
    } else {
        return null;
    }
}



export{ ChangeAlert};