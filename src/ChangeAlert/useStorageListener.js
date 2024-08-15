import React from "react";

function useStorageListener(synchronize){
        
        const [storageChange, setStorageChange]= React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'Todos_v1'){
                console.log ('Hubo cambios en Todos_v1');
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            synchronize();
            setStorageChange(false);
        };

        return{
            show:storageChange,
            toggleShow,
        }; 
    }

export  {useStorageListener}