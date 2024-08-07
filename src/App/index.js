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
            />
            <TodoSearch 
              searchValue= {searchValue}
              setSearchValue= {setSearchValue}
            />
          </TodoHeader>
                <TodoList 
                error={error}//propiedad
                loading={loading}//propiedad
                searchedTodos={searchedTodos}//propiedad

                onError={() =><TodosError/>}//randerizamos el error
                onLoading={()=><TodosLoading/>}//se muestra componende de loading
                onEmtyTodos={()=> <EmptyTodos/>}// se randeriza EmtyTodos.
                render={ todo =>(//Devuelve cada TODO
                  
                  <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => todoComplete(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                  />
                )}
                />
                
                {/* <TodoList>


                {loading && 
                <>
                <TodosLoading/>
                <TodosLoading/>
                </>}

                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
                {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => todoComplete(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                  ))}      
            </TodoList> */}
          <TodoCreateButton setOpenModal={setOpenModal}/>
         
        {openModal && (<Modal>
          <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          /> 
                  </Modal> )}
      </>
      );
  
}

export default App;
