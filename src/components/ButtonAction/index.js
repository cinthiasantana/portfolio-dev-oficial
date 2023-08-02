import { Link } from 'react-router-dom';
import './buttonAction.css';

function ActionButton(props) {
  return (
    <div className="container-buttonAction">
      <button className='button'>{props.title}</button>
    </div>
  );
}

export default ActionButton;