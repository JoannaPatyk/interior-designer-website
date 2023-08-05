import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Projects';
import project1 from '../assets/img/project-1.jpg';
import project2 from '../assets/img/project-2.jpg';
import project3 from '../assets/img/project-3.jpg';
import project4 from '../assets/img/project-4.jpg';
import { HiArrowLongDown, HiArrowLongLeft } from 'react-icons/hi2';
import { HiMenu } from 'react-icons/hi';
import SmallMenu from '../components/SmallMenu';

function Projects() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleIcon = isOpen ? <HiMenu onClick={handleToggle} /> : <HiArrowLongLeft onClick={handleToggle} />;
    return (
        <Wrapper>
            <div className="menu-icon">{toggleIcon}</div>
            <div className={`${isOpen ? 'menu-box' : 'menu-box menu-open'}`}>
                <SmallMenu />
            </div>
            <div className="projects-container">
                <div className="project-title">
                    <div className="line"></div>
                    <h1>Ostatnio zrealizowane projekty</h1>
                    <div className="line"></div>
                </div>
                <div className="projects">
                    <div className="project">
                        <img src={project1} alt="Projekt" />
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                    </div>
                    <div className="project">
                        <img src={project2} alt="Projekt" />
                    </div>
                    <div className="project">
                        <img src={project3} alt="Projekt" />
                        <div className="circle circle-3"></div>
                        <div className="circle circle-4"></div>
                    </div>
                    <div className="project">
                        <img src={project4} alt="Projekt" />
                        <div className="circle circle-5"></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Projects;
