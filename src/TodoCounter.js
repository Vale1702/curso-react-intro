import './TodoCounter.css';

function TodoCounter({total, completed}){
  const mensaje = total == completed;

  if(!mensaje){
    return(
          <h1 className='TodoCounter'>
        Haz completado  <span> { completed } </span>  de <span> { total } </span> Todos
          </h1>
    );
  }

return(
  <p className='felicidades'>
    Felicidades haz completado todos los TODOS.
  </p>
);
}

  export {TodoCounter};