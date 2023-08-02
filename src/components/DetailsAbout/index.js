import './detailsAbout .css';

function DetailsAbout(props) {
  return (
    <div className="container-aboutDetails">
      <div className='description'>{props.description}</div>
    </div>
  );
}

export default DetailsAbout;