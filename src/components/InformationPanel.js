import React from 'react';
import { TfiRulerPencil, TfiPalette } from 'react-icons/tfi';
import { LuHeartHandshake } from 'react-icons/lu';
import Wrapper from '../assets/wrappers/InformationPanel';
import { Link } from 'react-router-dom';

function InformationPanel() {
    return (
        <Wrapper>
            <div className="information-container">
                <div className="advantages-container">
                    <div className="advantages-title">
                        <div className="line"></div>
                        <h1>CO MNIE WYRÓŻNIA?</h1>
                    </div>
                    <div className="advantages-elements">
                        <div className="advantage">
                            <TfiPalette className="advantage-icon" />
                            <h2>Kreatywność</h2>
                            <p>
                                Do każdego projektu staram się podchodzić z kreatywnością, tak aby przekształcać zwykłe
                                przestrzenie w dzieła sztuki. Projekty są pełne nietuzinkowych elementów i
                                nieszablonowych pomysłów. Kreatywność pozwala mi tworzyć wnętrza, które są jednocześnie
                                funkcjonalne i estetyczne.
                            </p>
                        </div>

                        <div className="advantage">
                            <TfiRulerPencil className="advantage-icon" />
                            <h2>Sumienność</h2>
                            <p>
                                Moja praca to moja wizytówka, dlatego każdy szczegół ma znaczenie. Sumiennie planujemy,
                                projektujemy i realizujemy, aby każde wnętrze oddawało nie tylko piękno, ale także
                                funkcjonalność. Dbamy o to, aby materiały były starannie wybierane, a wykonawstwo
                                spełniało najwyższe standardy.
                            </p>
                        </div>

                        <div className="advantage">
                            <LuHeartHandshake className="advantage-icon" />
                            <h2>Doskonała Komunikacja</h2>
                            <p>
                                Cenię dobrą komunikację. Słucham uważnie Twoich marzeń, potrzeb i obaw, aby stworzyć
                                projekt, który doskonale odzwierciedla Twoją wizję. Dzięki otwartej i transparentnej
                                komunikacji jestem w stanie efektywnie współpracować i dostosować podejście do Twoich
                                oczekiwań.
                            </p>
                        </div>
                    </div>
                </div>
                <Link to="/portfolio" className="btn">
                    Sprawdź zrealizowane projekty
                </Link>
            </div>
        </Wrapper>
    );
}

export default InformationPanel;
