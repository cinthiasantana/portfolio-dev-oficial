import './footer.css';
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-footer">
      <div className='logo-footer'>CinthiaSantana</div>
      <nav className='nav-footer'>
        <Link className='home' to="/">Home</Link>
        <Link className='home' to="/sobre">Sobre</Link>
        <Link className='home' to="/skills">Skills</Link>
        <Link className='home' to="/projetos">Projetos</Link>
        <Link className='home' to="/contato">Contato</Link>
      </nav>

      <div className='contacts-footer'>
        <Link className='icon-contact' to="/"><FaLinkedinIn /></Link>
        <Link className='icon-contact' to="/sobre"><FaMailBulk /></Link>
        <Link className='icon-contact' to="/skills"><FaGithub /></Link>
        <Link className='icon-contact' to="/projetos"><FaPhone /></Link>
      </div>
    </div>
  );
}

export default Footer;
