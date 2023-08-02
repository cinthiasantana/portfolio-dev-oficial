import './home.css';
import axios from 'axios';
import Services from "../../components/Services";
import Skills from "../../components/Skills";
import ButtonAction from "../../components/ButtonAction";
import ButtonSecondary from "../../components/ButtonSecondary";
import DetailsAbout from "../../components/DetailsAbout";
import AccessGithub from "../../components/AccessGithub";
import avatar from '../../imgs/avatar-hero.jpeg'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

function Home() {

  const [slidePerView, setSlidePerView] = useState(3);
  const [slideSpaceBetween, setSlideSpaceBetween] = useState(30);
  const [projects, setProjects] = useState([]);
  const [imageMain, setImageMain] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(({ data }) => {
        setProjects(data);
        setImageMain(data.imageMain);
      });

    //forma de colocar responsividade
    function handleResize() {
      if (window.innerWidth < 700) {
        setSlidePerView(1.5);
        setSlideSpaceBetween(120);
      } else {
        setSlidePerView(3);
        setSlideSpaceBetween(30);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="container">
      <section id='hero'>
        <div className='content'>
          <h1>Olá, sou Cínthia Desenvolvedora FullStack</h1>
          <p>Desenvolvedora web estudante de análise e desenvolvimento de sistemas.</p>
          <div className='btn-cta'>
            <a href="#contact"><ButtonAction title="Entrar em Contato" /></a>
            <a href="#sobre"><ButtonSecondary title="Download do Currículo" /></a></div>
        </div>
        <div className='avatar'>
          <img src={avatar} />
        </div>
      </section>

      <section id='about'>
        <div className='container-about'>
          <div className='avatar'>
            <img src={avatar} />
          </div>
          <div className='content'>
            <h1>Desenvolvedora FullStack</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
            <a href="#contato"><ButtonAction title="Download do Currículo" /></a>
          </div>
        </div>
        <div className='details-about'>
          <DetailsAbout description="Nome Completo: Cinthia Ornelas Santana" />
          <DetailsAbout description="Endereço: São Bernardo, SP" />
          <DetailsAbout description="Aniversario: 12/01/2001 -  22 anos" />
          <DetailsAbout description="Contato: (11) 94949-5076" />
          <DetailsAbout description="Estudante de Análise e Desenvolvimento de sistemas" />
          <DetailsAbout description="Email: cinthiasantanadev@gmail.com" />
          <DetailsAbout description="https://github.com/cinthiasantana" />
          <DetailsAbout description="www.linkedin.com/in/cinthiasantanadev" />
        </div>
      </section>
      <section id='services'>
        <div className='section-title'>
          <h2 className='title-main-services'> Meus Serviços </h2>
          <h3 className='description-main-services'>Conheça os serviços personalizados que ofereço como programadora</h3>
        </div>
        <Services />
      </section>

      <section id='skills'>
        <div className='section-title'>
          <h2 className='title-main-skills'> Habilidades Técnicas </h2>
          <h3 className='description-main-skills'>Principais ferramentas e tecnologias com quais trabalho e possuo conhecimentos</h3>
        </div>
        <Skills />
      </section>

      <section id='skills'>
        <div className='section-title'>
          <div className='intro'>
            <h2 className='title-main-projects'>Projetos Desenvolvidos</h2>
            <h3 className='description-main-projects'>Confira os principais projetos desenvolvidos por mim onde apliquei todo meu conhecimento</h3>
          </div>
          <div className='button-all'>
            <ButtonAction title="Vizualizar Todos" />
          </div>
        </div>

        <div className="container-projects">
          <Swiper
            spaceBetween={slideSpaceBetween}
            slidesPerView={slidePerView}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <div className='content-projects'>
              {projects.map((project) => (
                <SwiperSlide>
                  <div className='project' key={project.id} >
                    <img src={project.imagePresentation} />
                    <div className='description-project'>
                      <h3 className='title-project'>{project.title}</h3>
                      <p className='summary-project'>{project.description}</p>
                      <div className='btn-action-project'>
                        <button><Link to={`/detalhes-projeto/${project.id}`}> Ver Detalhes </Link></button>
                        <button><Link to='./'>Visitar Site</Link></button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>

        </div>
        <AccessGithub description="Visite meu GitHub e mergulhe no meu mundo de desenvolvimento de software!" />
      </section>
    </div>
  );
}

export default Home;