import {HashRouter, Routes, Route } from 'react-router-dom';
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
import { ChangeAlert } from '../ChangeAlert';
import { Menu } from '../MenuTodo/Menu';
import { HomePage } from '../Routes/HomePage';
import { BlogPage } from '../Routes/BlogPage';
import { BlogPost } from '../Routes/BlogPost';
import { ProfilePage } from '../Routes/ProfilePage';


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

    synchronizeTodos,
    } = useTodos();

    return (
      <>
      <HashRouter>
          <Menu />
          <Routes>
              <Route path='/' element={ <HomePage/> } />

              <Route path='/blog' element={ <BlogPage/> } >
                <Route path='/blog/:slug' element={ <BlogPost/> } />
              </Route>
              
              <Route path='/profile' element={ <ProfilePage/> } />
              <Route path='*' element={ <p>No Found </p> } />
          </Routes>
      </HashRouter>

          <TodoHeader loading={loading}>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch 
              searchValue= {searchValue}
              setSearchValue= {setSearchValue}
            />
          </TodoHeader >
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

          <TodoCreateButton setOpenModal={setOpenModal}/>
         
        {openModal && (<Modal>
          <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          />            </Modal> )}
          <ChangeAlert 
          synchronize={synchronizeTodos}
          />
          </>
    )

}

export default App;