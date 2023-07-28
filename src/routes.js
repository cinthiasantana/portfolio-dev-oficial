import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<AllProjects />} />
            </Routes>
            <Contact />
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;