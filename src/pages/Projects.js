import React from 'react';
import Wrapper from '../assets/wrappers/Projects';
import SmallMenu from '../components/SmallMenu';
import projects from '../utils/projects';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

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
                    {projects.map(({ id, img1, img2, alt, title, description }) => {
                        return (
                            <div key={id} className="project">
                                <ReactCompareSlider
                                    boundsPadding={10}
                                    itemOne={<ReactCompareSliderImage alt={alt} src={img1} />}
                                    itemTwo={<ReactCompareSliderImage alt={alt} src={img2} />}
                                    position={50}
                                    style={{
                                        height: '50vh',
                                        width: '100%',
                                        objectFit: 'cover',
                                        opacity: '1'
                                    }}
                                />
                                <p className="title">{title}</p>
                                {description}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

export default Projects;
