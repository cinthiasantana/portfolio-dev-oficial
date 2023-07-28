import './hero.css';
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar-hero.jpeg'

function Hero() {
  return (
    <div className='container-hero'>
      <div className='content'>
        <h1>Olá, sou Cínthia Desenvolvedora FullStack</h1>
        <p>Desenvolvedora web estudante de análise e desenvolvimento de sistemas.</p>
        <div className='btn-cta'>
          <button className='btn-contato'><Link className='home' to="/contato">Entrar em Contato</Link></button>
          <button className='btn-download'><Link className='home' to="/">Download do Currículo</Link></button>
        </div>
      </div>
      <div className='avatar'>
        <img src={avatar} />
      </div>
    </div>
  );
}

export default Hero;
