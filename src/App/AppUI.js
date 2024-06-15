import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
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
     } = React.useContext(TodoContext);

return (
    <>
        <TodoCounter />
        <TodoSearch />
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