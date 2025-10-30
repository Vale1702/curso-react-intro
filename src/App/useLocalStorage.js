import React from "react";
function useLocalStorage(itemName, initialValue){
     const [synchronizedItem, setSynchronizedItem]= React.useState(true);
     const [item, setItem]= React.useState(initialValue);
     const [loading, setLoading]= React.useState(true);
     const [error, setError]= React.useState(false);

    React.useEffect(()=>{
        setTimeout(()=>{
            try{
              const localStorageItem= localStorage.getItem(itemName);
              let parsedItem;
        
              if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem=initialValue;
              } else{
                parsedItem=JSON.parse(localStorageItem);
                setItem(parsedItem);
              }
              setLoading(false);
              setSynchronizedItem(true);
            }   catch(error){
                setLoading(false);
                setError(true);
                }
        },3000);
    }, [synchronizedItem]);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    const  synchronizeItems = ()=>{
      setLoading (true);
      setSynchronizedItem(false);
    }

    return {
      item, 
      saveItem,
      loading,
      error,
      synchronizeItems,
    };
  }

  export {useLocalStorage};