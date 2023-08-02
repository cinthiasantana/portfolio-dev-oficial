import { Link } from 'react-router-dom';
import './skills.css';
import { DiAngularSimple, DiApple, DiBootstrap, DiChrome, DiCss3, DiDotnet, DiGit, DiHtml5, DiJavascript, DiJavascript1, DiMysql, DiNodejs, DiReact, DiScriptcs, DiTypo3 } from "react-icons/di";

function Skills() {
  const skills = [
    {
      title: "HTML",
      description: "Sólidos conhecimentos em HTML, capaz de criar e estruturar páginas da web de forma eficiente e semântica.",
      icon: <DiHtml5 />
    },
    {
      title: "CSS",
      description: "Capaz de criar interfaces atraentes e intuitivas, utilizando seletores, flexbox e CSS grid para obter resultados modernos e compatíveis com dispositivos móveis.",
      icon: <DiCss3 />
    },
    {
      title: "JavaScript",
      description: "Capaz de criar interfaces atraentes e intuitivas, utilizando seletores, flexbox e CSS grid para obter resultados modernos e compatíveis com dispositivos móveis.",
      icon: <DiJavascript1 />
    },
    {
      title: "TypeScript",
      description: "Desenvolvimento de aplicações web seguras e escaláveis para garantir código mais robusto e manutenível.",
      icon: <DiTypo3 />
    },
    {
      title: "Bootstrap",
      description: "Criação de layouts responsivos e interfaces modernas com componentes e recursos para agilizar o desenvolvimento e garantir uma experiência consistente.",
      icon: <DiBootstrap />
    },
    {
      title: "NodeJs",
      description: "Capaz de criar interfaces atraentes e intuitivas, utilizando seletores, flexbox e CSS grid para obter resultados modernos e compatíveis com dispositivos móveis.",
      icon: <DiNodejs />
    },
    {
      title: "C#",
      description: "Desenvolvimento de funcionalidades interativas e dinâmicas para sites, visando proporcionar uma experiência de usuário envolvente.",
      icon: <DiChrome />
    },
    {
      title: ".NET",
      description: "Capaz de criar interfaces atraentes e intuitivas, utilizando seletores, flexbox e CSS grid para obter resultados modernos e compatíveis com dispositivos móveis.",
      icon: <DiDotnet />
    },
    {
      title: "React",
      description: "Criação de layouts responsivos e interfaces modernas com componentes e recursos para agilizar o desenvolvimento e garantir uma experiência consistente.",
      icon: <DiReact />
    },
    {
      title: "Angular",
      description: "Capaz de criar interfaces atraentes e intuitivas, utilizando seletores, flexbox e CSS grid para obter resultados modernos e compatíveis com dispositivos móveis.",
      icon: <DiAngularSimple />
    },
    {
      title: "MySql",
      description: "Capaz de criar interfaces atraentes e intuitivas, utilizando seletores, flexbox e CSS grid para obter resultados modernos e compatíveis com dispositivos móveis.",
      icon: <DiMysql />
    },
    {
      title: "Git",
      description: "Desenvolvimento de funcionalidades interativas e dinâmicas para sites, visando proporcionar uma experiência de usuário envolvente.",
      icon: <DiGit />
    },
  ]

  return (
    <div className="container-skills">
      <div className='content-skills'>
        {
          skills.map((skill, index) => (
            <div className='skill' key={`skill-${index}`}>
              <div className='icon-skill'>{skill.icon}</div>
              <h3 className='title-skill'>{skill.title}</h3>
              <p className='description-skill'>{skill.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Skills;