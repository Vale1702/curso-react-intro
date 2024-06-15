import React from "react";
function useLocalStorage(itemName, initialValue){
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
            }   catch(error){
                setLoading(false);
                setError(true);
                }
        },3000);
    },[]);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  }

  export {useLocalStorage};

//  localStorage.removeItem('Todos_v1');
//   const defaultTodos =[
//     {text: 'Cortar cebolla', completed: true},
//     {text: 'Tomar Curso', completed: true},
//     {text: 'Llorar con la llorona', completed: true},
//     {text: 'LALALALA', completed: false},
//     {text: 'jasdfkajf', completed: false},
//     {text: 'gryii', completed: false},
//     ];
//  localStorage.setItem('Todos_v1', JSON.stringify(defaultTodos));
