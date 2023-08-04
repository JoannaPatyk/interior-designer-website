import React from 'react';
import Wrapper from '../assets/wrappers/Services';
import service1 from '../assets/img/service-1.jpg';
import service2 from '../assets/img/service-2.jpg';
import service3 from '../assets/img/service-3.jpg';
import service4 from '../assets/img/service-4.jpg';

function Services() {
    return (
        <Wrapper>
            <div className="services-container">
                <div className="services-title">
                    <div className="line"></div>
                    <h1 className="title">Jak wygląda realizacja usługi?</h1>
                    <div className="line"></div>
                </div>
                <div className="service">
                    <div className="img-bg-container">
                        <div className="img-container">
                            <img src={service1} className="service-img" alt="" />
                        </div>
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                    </div>
                    <div className="service-description service-1">
                        <h3>Krok 1: Wstępna rozmowa i przedstawienie wizji</h3>
                        <p>
                            Na tym etapie omawiamy Twoje oczekiwania, preferencje i wizję dotyczącą wnętrza, które
                            chcesz stworzyć. Dokładnie dowiem się, jakie są Twoje potrzeby, styl życia oraz estetyczne
                            preferencje. To pozwoli mi lepiej zrozumieć, jak mogę dostosować projekt do Ciebie.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <div className="service-description service-2">
                        <h3>Krok 2: Analiza przestrzeni i propozycja projektu</h3>
                        <p>
                            Po zebraniu informacji z pierwszej rozmowy przystępuje do analizy przestrzeni, z którą będę
                            pracować. Opracowuje dla Ciebie wstępną propozycję projektu uwzględniając wszelkie elementy.
                            Na tym etapie przedstawiam wstępne pomysły, abyśmy mogli razem doprecyzować koncepcję i
                            dostosować ją do Twoich oczekiwań.
                        </p>
                    </div>
                    <div className="img-bg-container">
                        <div className="img-container">
                            <img src={service2} className="service-img" alt="" />
                        </div>
                        <div className="circle circle-3"></div>
                    </div>
                </div>
                <div className="service">
                    <div className="img-bg-container">
                        <div className="img-container">
                            <img src={service3} className="service-img" alt="" />
                        </div>
                        <div className="circle circle-4"></div>
                    </div>
                    <div className="service-description service-3">
                        <h3>Krok 3: Szczegółowa wycena</h3>
                        <p>
                            Po lepszym zrozumieniu Twoich preferencji, przystępuje do przygotowania wyceny projektu.
                            Uwzględnia ona szacowane koszty oraz czas realizacji projektu. Przedstawiamy Ci również
                            harmonogram prac, abyś wiedział, kiedy możesz oczekiwać poszczególnych etapów projektu.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <div className="service-description service-4">
                        <h3>Krok 4: Podpisanie umowy i rozpoczęcie prac</h3>
                        <p>
                            Gdy wycena zostanie zaakceptowana, przechodzimy do podpisania umowy. Po podpisaniu umowy
                            rozpoczynam prace nad Twoim projektem. Będziesz na bieżąco informowany o postępach i
                            będziesz mieć okazję wnosić ewentualne uwagi lub zmiany.
                        </p>
                    </div>
                    <div className="img-bg-container">
                        <div className="img-container">
                            <img src={service4} className="service-img" alt="" />
                        </div>
                        <div className="circle circle-5"></div>
                        <div className="circle circle-6"></div>
                    </div>
                </div>
                <h4 className="services-description">
                    Projekt wnętrza to proces, w którym Twój głos i <span>preferencje są kluczowe</span>. Moja wiedza w
                    połączeniu z Twoją wizją pozwolą stworzyć wnętrze, które będzie odzwierciedleniem Twojej osobowości
                    i funkcjonalnych potrzeb.{' '}
                    <span>
                        Czekam na współpracę z Tobą i na stworzenie wnętrza, które przewyższy Twoje oczekiwania.
                    </span>
                </h4>
            </div>
        </Wrapper>
    );
}

export default Services;
