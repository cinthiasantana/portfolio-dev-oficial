import './allProjects.css';
import AccessGithub from "../../components/AccessGithub";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


function AllProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/projects')
      .then((response) => {
        setProjects(response.data);
      });
  }, []);

  return (
    <div className="container-projects">
      <h1> Projetos desenvolvidos </h1>
      <div id='content-project'>
        {projects.map((projects) => (

          <div className='project' key={projects.id} >
            <img src={projects.image} />
            <div className='description-project'>
              <h3 className='title-project'>{projects.title}</h3>
              <p className='summary-project'>{projects.description}</p>
              <div className='btn-action-project'>
                <button><Link to='/detalhes-projeto'>Ver Detalhes</Link></button>
                <button><Link to='./'>Visitar Site</Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AccessGithub description="Visite meu GitHub e tenha acesso ao código desse projeto!" />
    </div>
  );
}

export default AllProjects;