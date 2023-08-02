
import './accessGithub.css';
import { FaGithub } from "react-icons/fa";

function AccessGithub(props) {
  return (
    <div className="container-accessGithub">
      <div className='cta-gtihub'>
        <div className='title-cta-gtihub'>
          <h3>{props.description}</h3>
        </div>
        <div className='btn-github'>
          <button><div className='icon-github'><FaGithub /></div>{props.linkGitHub}</button>
        </div>
      </div>
    </div>
  );
}

export default AccessGithub;