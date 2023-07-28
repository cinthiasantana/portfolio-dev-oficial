import { Link } from 'react-router-dom';
import './aboutDetails.css';

function AboutDetails(props) {
  return (
    <div className="container-aboutDetails">
      <div className='description'>{props.description}</div>
    </div>
  );
}

export default AboutDetails;