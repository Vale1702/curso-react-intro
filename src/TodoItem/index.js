import './TodoItem.css';
import { CheckIcon } from '../TodoIcon/checkIcon';
import { DeleteIcon } from '../TodoIcon/deleteIcon';

function TodoItem(props){
    return(
      <li className='TodoItem'>
        <CheckIcon
        completed={props.completed}
        onComplete={props.onComplete}
        />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}
      </p>
      
      <DeleteIcon
      onDelete={props.onDelete}
      />
  
      </li>
    );
  }

  export {TodoItem};