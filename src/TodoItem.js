import './TodoItem.css';
import { CheckIcon } from './checkIcon';
import { DeleteIcon } from './deleteIcon';

function TodoItem(props){
    return(
      <li className='TodoItem'>
        <CheckIcon/>
        {/* <span className={`Icon Icon-check  ${props.completed && "Icon-check--active"} `}
        onClick={props.onComplete}
        >
          V
        </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}
      </p>
      <DeleteIcon/>
      {/* <span className='Icon Icon-delete'
      onClick={props.onDelete}
      >
        X</span> */}
      </li>
    );
  }

  export {TodoItem};