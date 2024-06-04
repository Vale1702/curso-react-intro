import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList} from './TodoList';
import { TodoCreateButton } from './TodoCreateButton';
import { TodoItem } from './TodoItem';
function App() {
  return (
    <div className="App">
      
    <TodoCounter/>
    <TodoSearch/>

    <TodoList>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </TodoList>

<TodoCreateButton/>
    </div>
  );
}



export default App;
