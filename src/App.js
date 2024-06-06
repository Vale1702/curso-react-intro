import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList} from './TodoList';
import { TodoCreateButton } from './TodoCreateButton';
import { TodoItem } from './TodoItem';

const defaultTodos =[
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar Curso', completed: false},
  {text: 'Llorar con la llorona', completed: true},
  {text: 'lalala', completed: false},
  {text: 'jasdfkajf', completed: false},

  ];

function App() {
  return (
    <> 
      
    <TodoCounter completed={15} total={20}/>
    <TodoSearch/>

    <TodoList>
    {defaultTodos.map(todo => (
      <TodoItem key={todo.text} 
      text={todo.text}
      completed={todo.completed}/>
    ))}      
    </TodoList>

<TodoCreateButton/>
</>
  );
}



export default App;
