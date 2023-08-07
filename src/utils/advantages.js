import React from 'react';
import { CiCalculator2 } from 'react-icons/ci';
import { GiLightBulb } from 'react-icons/gi';
import { LuHeartHandshake } from 'react-icons/lu';

const advantages = [
    {
        id: 0,
        icon: <GiLightBulb className="advantage-icon" />,
        title: 'Kreatywność',
        description:
            'Do każdego projektu staram się podchodzić z kreatywnością, tak aby przekształcać zwykłe przestrzenie w dzieła sztuki. Projekty są pełne nietuzinkowych elementów i nieszablonowych pomysłów. Kreatywność pozwala mi tworzyć wnętrza, które są jednocześnie funkcjonalne i estetyczne.'
    },
    {
        id: 1,
        icon: <CiCalculator2 className="advantage-icon" />,
        title: 'Sumienność',
        description:
            'Moja praca to moja wizytówka, dlatego każdy szczegół ma znaczenie. Sumiennie planujemy, projektujemy i realizujemy, aby każde wnętrze oddawało nie tylko piękno, ale także funkcjonalność. Dbamy o to, aby materiały były starannie wybierane, a wykonawstwo spełniało najwyższe standardy.'
    },
    {
        id: 2,
        icon: <LuHeartHandshake className="advantage-icon" />,
        title: 'Komunikacja',
        description:
            'Cenię dobrą komunikację. Słucham uważnie Twoich marzeń, potrzeb i obaw, aby stworzyć projekt, który doskonale odzwierciedla Twoją wizję. Dzięki otwartej i transparentnej komunikacji jestem w stanie efektywnie współpracować i dostosować podejście do Twoich oczekiwań.'
    }
];

export default advantages;
