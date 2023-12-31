import './header.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link className='logo' to="/">CinthiaSantana</Link>
      <nav>
        <Link className='home' to="/">Home</Link>
        <a href="#sobre" className='home'>Sobre</a>
        <Link className='home' to="/skills">Skills</Link>
        <Link className='home' to="/projetos">Projetos</Link>
        <Link className='home' to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
