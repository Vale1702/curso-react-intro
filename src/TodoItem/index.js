import './TodoItem.css';
import { CheckIcon } from '../TodoIcon/checkIcon';
import { DeleteIcon } from '../TodoIcon/deleteIcon';

function TodoItem(props){
    return(
      <div className='TodoItem'>  
          <CheckIcon
          completed={props.completed}
          onComplete={props.onComplete}
          id='CheckIcon'
          />
          <li>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}
            </p>
          </li>
        
        <DeleteIcon
        onDelete={props.onDelete}
        id='DeleteIcon'
        />
      </div>
    );
  }

  export {TodoItem};