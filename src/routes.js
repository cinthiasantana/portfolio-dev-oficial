import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import DetailsProject from './pages/DetailsProject';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<AllProjects />} />
                <Route path="/detalhes-projeto/:id" element={<DetailsProject />} />
            </Routes>
            <Contact />
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;