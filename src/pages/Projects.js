import React from 'react';
import Wrapper from '../assets/wrappers/Projects';
import SmallMenu from '../components/SmallMenu';
import projects from '../utils/projects';

function Projects() {
    return (
        <Wrapper>
            <SmallMenu />
            <div className="projects-container">
                <div className="project-title">
                    <div className="line"></div>
                    <h1>Ostatnio zrealizowane projekty</h1>
                    <div className="line"></div>
                </div>
                <div className="projects">
                    {projects.map(({ id, img, alt, circle1, circle2, title }) => {
                        return (
                            <div key={id} className="project">
                                <img src={img} alt={alt} />
                                <div className={circle1}></div>
                                <div className={circle2}></div>
                                <p className="title">{title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

export default Projects;
