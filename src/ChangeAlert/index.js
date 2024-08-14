import React from "react";
import './ChangeAlert.css'
import { TfiReload  } from "react-icons/tfi";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}){
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


const ChangeAlertWithStorageListener= withStorageListener(ChangeAlert)

export{ ChangeAlertWithStorageListener};