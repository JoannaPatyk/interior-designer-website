import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/About';
import work1 from '../assets/img/work-1.jpg';
import work2 from '../assets/img/room-2.jpg';
import { HiArrowLongDown, HiArrowLongLeft } from 'react-icons/hi2';
import { HiMenu } from 'react-icons/hi';
import SmallMenu from '../components/SmallMenu';

function About() {
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
            <div className="about-container">
                <div className="description-container-1">
                    <div className="img-container">
                        <img src={work1} className="work1-img" alt="Women" />
                    </div>
                    <HiArrowLongDown className="arrow" />
                    <div className="description">
                        <h2 className="hello-title">
                            Witam, z tej strony <span>Renata</span>!
                        </h2>
                        <p className="element">
                            Moja przygoda z architekturą wnętrz rozpoczęła się w momencie, zakupu własnego domu w jednej
                            z malowniczych polskich wsi. To właśnie remont i aranżacja tego domu{' '}
                            <span>ożywiły we mnie ogromną ciekawość i zamiłowanie do kreowania przestrzeni</span>.
                        </p>
                        <p className="element">
                            Na początku mojej przygody z architekturą wnętrz główne źródła inspiracji czerpałam z
                            internetu, gdzie mogłam podziwiać prace innych architektów i odkrywać nowe trendy w
                            projektowaniu wnętrz. Mimo braku kierunkowego wykształcenia,{' '}
                            <span>
                                skupiłam się na samokształceniu i eksploracji różnych aspektów architektury wnętrz
                            </span>
                            . To praktyka, eksperymentowanie i wdrażanie w życie własnych pomysłów napędzały moją wiedzę
                            i umiejętności.
                        </p>
                    </div>
                </div>
                <div className="description-container-2">
                    <div className="description">
                        <p className="element">
                            W mojej pracy często czerpię z różnorodnych stylów wnętrzarskich, jednak to rustykalny i
                            skandynawski mają szczególne miejsce w moim sercu.{' '}
                            <span>
                                Kocham łączyć elementy klasyczne z nutą nowoczesności, tworząc unikalne i przytulne
                                przestrzenie
                            </span>
                            .
                        </p>
                        <p className="element">
                            Moje długoterminowe cele koncentrują się na nieustannym rozwoju i poszukiwaniu nowych
                            wyzwań. Chcę tworzyć coraz bardziej innowacyjne projekty, które nie tylko inspirują, ale
                            także spełniają oczekiwania moich Klientów.{' '}
                            <span>
                                Współpraca z Klientami to dla mnie nie tylko tworzenie pięknych wnętrz, ale przede
                                wszystkim budowanie dobrego zrozumienia i komunikacji
                            </span>
                            . Szanuję indywidualne potrzeby każdego Klienta, dążąc do stworzenia projektu, który
                            odzwierciedla ich osobowość i styl życia.
                        </p>
                    </div>
                    <div className="img-container">
                        <img src={work2} className="work2-img" alt="Women" />
                    </div>
                    <HiArrowLongDown className="arrow arrow-2" />
                </div>

                <div className="message-container">
                    <div className="message-title">
                        <div className="line"></div>
                        <h1>Masz jakieś pytania?</h1>
                    </div>
                    <div className="message-contact">
                        <h3>Napisz do mnie, odpowiem najszybciej jak to możliwe!</h3>
                        <Link to="/contact" className="btn">
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default About;
