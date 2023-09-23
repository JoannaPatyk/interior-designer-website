import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Projects';
import SmallMenu from '../components/SmallMenu';
import projects from '../utils/projects';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function Projects() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                                {windowSize.width > 800 ? (
                                    <ReactCompareSlider
                                        boundsPadding={10}
                                        itemOne={<ReactCompareSliderImage alt={alt} src={img1} />}
                                        itemTwo={<ReactCompareSliderImage alt={alt} src={img2} />}
                                        position={50}
                                        style={{
                                            height: '100vh',
                                            width: '100%',
                                            objectFit: 'cover',
                                            opacity: '1'
                                        }}
                                    />
                                ) : (
                                    <img src={img1} className="slide-1" alt={alt} />
                                )}

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
