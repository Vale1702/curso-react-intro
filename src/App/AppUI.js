import React from 'react';
import { TodoHeader} from '../TodoHeader'
import { TodoCounter} from '../TodoCounter';
import { TodoSearch} from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoCreateButton } from '../TodoCreateButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';

function AppUI(){
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
     } = React.useContext(TodoContext);

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
              <TodoList>
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
          </TodoList>
        <TodoCreateButton setOpenModal={setOpenModal}/>
       
      {openModal && (<Modal>
        <TodoForm/> 
                </Modal> )}
    </>
    );
  }

  export {AppUI};