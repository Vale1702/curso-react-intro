import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList} from '../TodoList';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodoItem } from '../TodoItem';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

//   const defaultTodos =[
//     {text: 'Cortar cebolla', completed: true},
//     {text: 'Tomar Curso', completed: true},
//     {text: 'Llorar con la llorona', completed: true},
//     {text: 'LALALALA', completed: false},
//     {text: 'jasdfkajf', completed: false},
//     {text: 'gryii', completed: false},
//     ];
//  localStorage.setItem('Todos_v1', JSON.stringify(defaultTodos));
//  localStorage.removeItem('Todos_v1');


function App() {

  const [todos, saveTodos] = useLocalStorage('Todos_v1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos= todos.filter(
    todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) ;
    }
  );

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
  <>
      
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}/>

      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
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

      <TodoCreateButton/>
  </>
  );
}

export default App;
