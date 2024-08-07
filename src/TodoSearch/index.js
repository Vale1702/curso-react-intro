import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue,setSearchValue, loading}){

    return(
      <div className='container-todosearch'>
      <input 
      placeholder="Ingresa una Tarea" 
      className="TodoSearch"
      value={(searchValue)}
      onChange={(event)=> {
        setSearchValue(event.target.value);
      }}
      disabled={loading}
      />
      </div>
    );
  }

  export{TodoSearch};