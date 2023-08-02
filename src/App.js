import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';

import Landing from './pages/Landing';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Details />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    {/* <Route path="landing" element={<Landing />} /> */}
                    <Route path="projects" element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
