import './contact.css';
import { Link } from 'react-router-dom'
import { FaLinkedin, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

function Contact() {

  const contacts = [
    { title: "Email", description: "cinthiasantanadev@gmail.com", icon: <FaMailBulk /> },
    { title: "LinkedIn", description: "www.linkedin.com/in/cinthiasantanadev/", icon: <FaLinkedin /> },
    { title: "Celular", description: "+55 (11) 9 4949-5076", icon: <FaPhone /> },
    { title: "Localização", description: "São Bernardo, São Paulo - Brasil", icon: <FaLocationArrow /> },
  ]

  return (
    <div id='contato' className="container-contact">
      <div className='section-title-contact'>
        <h2 className='title-main-contact'>Entre em contato comigo!</h2>
        <h3 className='description-main-contact'>Sinta-se à vontade para entrar em contato comigo para discutir suas ideias, esclarecer dúvidas ou solicitar um orçamento personalizado. Estou disponível para reuniões presenciais ou virtuais, de acordo com a sua conveniência.</h3>
      </div>
      <div className='content-contact'>
        <div className='cards-contacts'>
          {contacts.map((contacts, index) => (
            <div className='contact' key={`contacts-${index}`}>
              <h3 className='title-contact'>{contacts.icon} {contacts.title}</h3>
              <p className='description-contact'>{contacts.description}</p>
            </div>
          ))}
        </div>
        <form method="post">
          <div>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" />
          </div>
          <div>
            <label for="email">E-mail:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label for="msg">Sua Mensagem:</label>
            <textarea id="msg" type='text'></textarea>
          </div>
          <button><Link to='./'>Enviar</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
