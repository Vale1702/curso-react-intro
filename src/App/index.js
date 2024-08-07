import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader} from '../TodoHeader'
import { TodoCounter} from '../TodoCounter';
import { TodoSearch} from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { TodoCreateButton } from '../TodoCreateButton';
import { Modal } from '../Modal';


function App() {

  const {
    loading,
    error,
    searchedTodos,
    todoComplete,
    deleteTodo,
    openModal,
    setOpenModal,

    completedTodos,
    totalTodos,

    searchValue,
    setSearchValue,

    addTodo,
    } = useTodos();

    return (
      <>
          <TodoHeader>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
                loading={loading}
            />
            <TodoSearch 
              searchValue= {searchValue}
              setSearchValue= {setSearchValue}
              loading={loading}
            />
          </TodoHeader>
                <TodoList 
                error={error}//propiedad de error
                loading={loading}//propiedad de carga 
                searchedTodos={searchedTodos}//propiedad de busqueda
                totalTodos={totalTodos}

                onError={() =><TodosError/>}//randerizamos el error
                onLoading={()=><TodosLoading/>}//se muestra componende de loading
                onEmptyTodos={()=> <EmptyTodos/>}// se randeriza EmtyTodos.
                onEmptySearchResults={
                  ()=> <p> No se encontraron resultados para: {searchValue} </p>// se randeriza EmtyTodos.
                  }                
                  render={ todo => (//Devuelve cada TODO

                    <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => todoComplete(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                  )}
                  />
                  {/* {todo =>(//Devuelve cada TODO

                    <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => todoComplete(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                  )}
                </TodoList> */}

          <TodoCreateButton setOpenModal={setOpenModal}/>
         
        {openModal && (<Modal>
          <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          />            </Modal> )}
      </>
      );
  
}

export default App;



