import { Link } from 'react-router-dom';
import './buttonSecondary.css';

function ButtonSecondary(props) {
  return (
    <div className="container-buttonSecondary">
      <button className='buttonSecondary'>{props.title}</button>
    </div>
  );
}

export default ButtonSecondary;