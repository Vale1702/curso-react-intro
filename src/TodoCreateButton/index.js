import './TodoCreateButton.css'

function TodoCreateButton({setOpenModal}){
    return(
        <button className="TodoCreateButton"
        onClick={ () => {
                    setOpenModal(state => !state);
                }
        }
        > +</button>
    );
  }

  export {TodoCreateButton};