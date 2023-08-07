import React from 'react';
import Wrapper from '../assets/wrappers/Information';
import { Link } from 'react-router-dom';
import advantages from '../utils/advantages';

function Information() {
    return (
        <Wrapper>
            <div className="information-container">
                <div className="advantages-title">
                    <div className="line"></div>
                    <h1>Co mnie wyróżnia?</h1>
                    <div className="line"></div>
                </div>

                <div className="advantages-container">
                    <div className="advantages-elements">
                        {advantages.map(({ id, icon, title, description }) => {
                            return (
                                <div key={id} className="advantage">
                                    {icon}
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Link to="/projects" className="btn">
                    Sprawdź zrealizowane projekty
                </Link>
            </div>
        </Wrapper>
    );
}

export default Information;
