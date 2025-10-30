import { useTodos } from '../App/useTodos';
import { TodoHeader} from '../TodoHeader'
import { TodoCounter} from '../TodoCounter';
import { TodoSearch} from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoCreateButton } from '../TodoCreateButton';
import { Modal } from '../Modal';
import { ChangeAlert } from '../ChangeAlert';
import { TodoForm } from '../TodoForm';


 function Todos(){
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

    return(
      <>     
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
                        searchedTodos={searchedTodos}//propiedad de búsqueda
                        totalTodos={totalTodos}
                        
                        onError={() =><TodosError/>}//rendering el error
                        onLoading={()=><TodosLoading/>}//se muestra componente de loading
                        onEmptyTodos={()=> <EmptyTodos/>}// se randeriza EmptyTodos.
                        onEmptySearchResults={
                          ()=> <p> No se encontraron resultados para: {searchValue} </p>// se randeriza EmptyTodos.
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
                              />            
                            </Modal> 
                        )}
              <ChangeAlert 
              synchronize={synchronizeTodos}
              /> 
        </>
    )
}
export {Todos};