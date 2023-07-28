import { Link } from 'react-router-dom';
import './projects.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [slidePerView, setSlidePerView] = useState(3);
  const [slideSpaceBetween, setSlideSpaceBetween] = useState(30);
  const projects = [
    { title: "Site de Galeria", description: "Projetos de site desenvolvido para mostrar uma galeria de projetos.", image: "img/projects/projeto1.png", },
    { title: "Site Institucional Moderno", description: "Site institucional com estilização moderna para apresentar uma empresa.", image: "img/projects/projeto1.png", },
    { title: "Dashboard de Sistema", description: "Site institucional com estilização moderna para apresentar uma empresa.", image: "img/projects/projeto1.png", },
    { title: "Dashboard de Sistema", description: "Site institucional com estilização moderna para apresentar uma empresa.", image: "img/projects/projeto1.png", },
    { title: "Site de Galeria", description: "Projetos de site desenvolvido para mostrar uma galeria de projetos.", image: "img/projects/projeto1.png", },
    { title: "Site Institucional Moderno", description: "Site institucional com estilização moderna para apresentar uma empresa.", image: "img/projects/projeto1.png", },
    { title: "Dashboard de Sistema", description: "Site institucional com estilização moderna para apresentar uma empresa.", image: "img/projects/projeto1.png", },
    { title: "Dashboard de Sistema", description: "Site institucional com estilização moderna para apresentar uma empresa.", image: "img/projects/projeto1.png", },
  ]

  //forma de colocar responsividade
  useEffect(() => {

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

  })

  return (
    <div className="container-projects">

        <div className='section-title'>
          <div className='intro'>
            <h2 className='title-main-projects'>Projetos Desenvolvidos</h2>
            <h3 className='description-main-projects'>Confira os principais projetos desenvolvidos por mim onde apliquei todo meu conhecimento</h3>
          </div>
          <div className='button-all'>
            <button>Vizualizar Todos</button>
          </div>
        </div>


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
            {projects.map((projects, index) => (
              <SwiperSlide>
                <div className='project' key={`projects-${index}`} >
                  <img src={projects.image} />
                  <div className='description-project'>
                    <h3 className='title-project'>{projects.title}</h3>
                    <p className='summary-project'>{projects.description}</p>
                    <div className='btn-action-project'>
                      <button><Link to='./'>Ver Detalhes</Link></button>
                      <button><Link to='./'>Visitar Site</Link></button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <div className='cta-gtihub'>
          <div className='title-cta-gtihub'>
            <h3>Visite meu GitHub e mergulhe no meu mundo de desenvolvimento de software!</h3>
          </div>
          <div className='btn-github'>
            <button> <span className='icon-github'><FaGithub /></span> <Link to='./'>github.com/cinthiasantana</Link></button>
          </div>
        </div>
    </div>
  );
}

export default Projects;