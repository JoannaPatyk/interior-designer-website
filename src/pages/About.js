import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/About';
import work1 from '../assets/img/windows.jpg';
import work2 from '../assets/img/blackstairs.jpg';
import SmallMenu from '../components/SmallMenu';
import descriptions from '../utils/descriptions';

function About() {
    return (
        <Wrapper>
            <SmallMenu />
            <div className="about-container">
                <div className="description-container-1">
                    <div className="img-container">
                        <img src={work1} className="work1-img" alt="Women" />
                    </div>
                    <div className="description">
                        {descriptions.map(({ id, element }) => {
                            if (id < 2) {
                                return (
                                    <p key={id} className="element">
                                        {element}
                                    </p>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="description-container-2">
                    <div className="description">
                        {descriptions.map(({ id, element }) => {
                            if (id > 1) {
                                return (
                                    <p key={id} className="element">
                                        {element}
                                    </p>
                                );
                            }
                        })}
                    </div>
                    <div className="img-container">
                        <img src={work2} className="work2-img" alt="Women" />
                    </div>
                </div>
                <div className="message-container">
                    <div className="message-title">
                        <div className="line"></div>
                        <h1>Masz jakieś pytania?</h1>
                        <div className="line"></div>
                    </div>
                    <h3>Napisz do mnie, odpowiem najszybciej jak to możliwe!</h3>
                    <Link to="/contact" className="btn">
                        Kontakt
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
}

export default About;
