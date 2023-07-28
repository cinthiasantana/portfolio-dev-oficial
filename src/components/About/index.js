import { Link } from 'react-router-dom';
import './about.css';
import avatar from '../../img/avatar-hero.jpeg'
import AboutDetails from "../../components/About/AboutDetails";

function About() {
  return (
    <div className='container'>
      <div className='container-about'>
        <div className='avatar'>
          <img src={avatar} />
        </div>
        <div className='content'>
          <h1>Desenvolvedora FullStack</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
          <button className='btn-download'><Link className='home' to="/">Download do Currículo</Link></button>
        </div>
      </div>
      <div className='details-about'>
       
          <AboutDetails description="Nome Completo: Cinthia Ornelas Santana" />
          <AboutDetails description="Endereço: São Bernardo, SP" />
          <AboutDetails description="Aniversario: 12/01/2001 -  22 anos" />
          <AboutDetails description="Contato: (11) 94949-5076" />
          <AboutDetails description="Estudante de Análise e Desenvolvimento de sistemas" />
          <AboutDetails description="Email: cinthiasantanadev@gmail.com" />
          <AboutDetails description="https://github.com/cinthiasantana" />
          <AboutDetails description="www.linkedin.com/in/cinthiasantanadev" />
      
      </div>
    </div>
  );
}

export default About;