import React from "react";
import './ChangeAlert.css'
import { TbReload } from "react-icons/tb";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}){
    if(show){
        return ( 
        <div className="Alert-container">
            <p> Hubo Cambios</p>
            <button 
            onClick={()=> toggleShow(false)}
            > 
            Recargar <TbReload />

            </button>
        </div>
        );
    } else {
        return null;
    }
}


const ChangeAlertWithStorageListener= withStorageListener(ChangeAlert)

export{ ChangeAlertWithStorageListener};