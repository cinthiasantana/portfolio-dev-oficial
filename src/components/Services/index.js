import { Link } from 'react-router-dom';
import './services.css';
import { HiCommandLine, HiComputerDesktop, HiDevicePhoneMobile, HiPhone, HiTv } from "react-icons/hi2";

function Services() {

  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações online interativas, atrativas e funcionais por meio do uso de linguagens de programação, como HTML, CSS e JavaScript.",
      icon: <HiComputerDesktop />
    },
    {
      title: "Sistemas de Software",
      description: "Softwares para desktop para atender às necessidades específicas internas, proporcionando maior eficiência, segurança e produtividade",
      icon: <HiCommandLine />
    },
    {
      title: "Aplicações Mobile",
      description: "Criação de aplicativos e soluções sob medida para smartphones e tablets com experiências interativas e personalizadas. ",
      icon: <HiDevicePhoneMobile />
    }
  ]

  return (
    <div className='content-services'>
      {
        services.map((service, index) => (
          <div className='service' key={`services-${index}`}>
            <div className='icon-service'>{service.icon}</div>
            <h3 className='title-service'>{service.title}</h3>
            <p className='description-service'>{service.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Services;