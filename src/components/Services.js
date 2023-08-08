import React from 'react';
import Wrapper from '../assets/wrappers/Services';
import services from '../utils/services';

function Services() {
    return (
        <Wrapper>
            <div className="services-container">
                <div className="services-title">
                    <div className="line"></div>
                    <h1 className="title">Jak wygląda realizacja usługi?</h1>
                    <div className="line"></div>
                </div>

                {services.map(({ id, img, alt, circle1, circle2, title, description }) => {
                    return (
                        <div key={id} className="service">
                            <div className="img-bg-container">
                                <div className="img-container">
                                    <img src={img} className="service-img" alt={alt} />
                                </div>
                                <div className={circle1}></div>
                                <div className={circle2}></div>
                            </div>
                            <div className="service-description service-1">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    );
                })}

                <h4 className="services-description">
                    Projekt wnętrza to proces, w którym Twój głos i <span>preferencje są kluczowe</span>. Moja wiedza w
                    połączeniu z Twoją wizją pozwolą stworzyć wnętrze, które będzie odzwierciedleniem Twojej osobowości
                    i funkcjonalnych potrzeb. <br />
                    <span>
                        Czekam na współpracę z Tobą i na stworzenie wnętrza, które przewyższy Twoje oczekiwania.
                    </span>
                </h4>
            </div>
        </Wrapper>
    );
}

export default Services;
