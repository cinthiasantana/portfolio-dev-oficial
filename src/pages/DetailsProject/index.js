import './detailsProjects.css';
import AccessGithub from "../../components/AccessGithub";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import img from '../../imgs/projeto1.png'

function DetailsProjects() {

  const [details, setDetails] = useState([]);
  const [projects, setProjects] = useState([]);
  const [imageAbout, setImageAbout] = useState([]);
  const [features, setFeatures] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [iconsTechnologies, setIconsTechnologies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/details/${id}`)
      .then(({ data }) => {
        setDetails(data);
        setIconsTechnologies(data.iconsTechnologies);
        setFeatures(data.features);
        setInstructions(data.instructions);
        setProjects(data.imageMain);
        setImageAbout(data.imageSecondary);
      });
  }, []);

  return (
    <div className="container-details-projects">
      <section id='presentation'>
        <div className='img-main'>
          {projects.map((image, index) => (
            <div key={`image-${index}`} >
              <img src={image.image} />
            </div>
          ))}
        </div>
        <div className='info-main'>
          <h1>{details.title}</h1>
          <p>{details.description}</p>
          <h2>Objetivo do Projeto</h2>
          <p>{details.objective}</p>
          <h2>Técnologias Utilizadas</h2>

          <div className='group-icons'>
            {iconsTechnologies.map((icon, index) => (
              <div className='icons' key={`icon-${index}`} >
                <img className='icon' src={icon.icon} />
              </div>
            ))}
          </div>

          <h2 className='title-site'>Visite o site do projeto</h2>
          <p className='site'><a rel='external' href={`https://${details.site}`} target='_blank'>{details.site}</a></p>
        </div>
      </section>

      <section id='features'>
        <h2>Recursos e Funcionalidades</h2>
        <p>Aqui voce encontra um resumo dos objetivos deste projeto.</p>
        <div className='content-skills'>
          {
            features.map((feature, index) => (
              <div className='skill' key={`feature-${index}`}>
                <img className='icon-feature' src={feature.icon} />
                <h3 className='title-skill'>{feature.title}</h3>
                <p className='description-skill'>{feature.description}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section id='challenges'>
        <div className='description-challenge'>
          <h2>Desafios Enfrentados:</h2>
          <p>{details.moreAbout}</p>
        </div>
        <div className='img'>
          {imageAbout.map((image, index) => (
            <div key={`image-${index}`} >
              <img src={image.image} />
            </div>
          ))}
        </div>
      </section>

      <section id='instructions'>
        <h2 className='title'>Confira abaixo as instruções para aproveitar ao máximo todas as funcionalidades disponíveis </h2>
        <div className='content-instructions'>
          {
            instructions.map((instructions, index) => (
              <div className='instructions' key={`instructions-${index}`}>
                <div className='number-instructions'>{instructions.number}</div>
                <div className='content-description'>
                  <h3 className='title-instructions'>{instructions.title}</h3>
                  <p className='description-instructions'>{instructions.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      
      <a rel='external' href={`https://${details.gitHub}`} target='_blank'><AccessGithub description="Visite meu GitHub e tenha acesso ao código desse projeto!"  linkGitHub={details.gitHub} /></a>
    </div>
  );
}

export default DetailsProjects;