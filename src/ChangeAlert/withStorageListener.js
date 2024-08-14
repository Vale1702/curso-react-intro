import React from "react";

function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){
        
        const [storageChange, setStorageChange]= React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'Todos_v1'){
                console.log ('Hubo cambios en Todos_v1');
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            props.synchronize();
            setStorageChange(false);
        };

        return (
            <WrappedComponent
            show = {storageChange}
            toggleShow = {toggleShow}
            />
        );
    }
}

export  {withStorageListener}