import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext= React.createContext();

function TodoProvider({children}){
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
      } = useLocalStorage('Todos_v1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos= todos.filter(
        todo => !!todo.completed).length;
      const totalTodos = todos.length;
    console.log('Log 1');
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText) ;
        }
      );
      
      const addTodo =(text)=>{
        const newTodos= [...todos];
        newTodos.push({
          text,
          completed:false
        });     
        saveTodos(newTodos);
      }
      
      const todoComplete=(text)=>{
        const newTodos=[...todos];
        const todoIndex=newTodos.findIndex(
          (todo) => todo.text === text);
        newTodos[todoIndex].completed =newTodos[todoIndex].completed ? false: true;
        saveTodos(newTodos);
      }
    
      const deleteTodo =(text)=>{
        const newTodos=[...todos];
        const todoIndex=newTodos.findIndex(
          (todo) => todo.text === text);
          newTodos.splice(todoIndex,1);
          saveTodos(newTodos);
      }
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            todoComplete,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

<TodoContext.Consumer></TodoContext.Consumer>
export{TodoContext, TodoProvider};