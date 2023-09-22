import React from 'react';
import project1 from '../assets/img/project-1.jpg';
import project2 from '../assets/img/project-2.jpg';
import project3 from '../assets/img/project-3.jpg';
import project4 from '../assets/img/project-4.jpg';
import project5 from '../assets/img/project-5.jpg';
import project6 from '../assets/img/project-6.jpg';

const projects = [
    {
        id: 0,
        img1: project1,
        img2: project2,
        alt: 'Projekt 1',
        title: 'Klasyczny salon',
        description: [
            <p className="description" key={0}>
                Projekt klasycznego salonu, gdzie nowoczesna elegancja spotyka się z tradycją. W tym przestronnym
                salonie zastosowaliśmy delikatne odcienie bieli, kremu i złota, aby stworzyć atmosferę pełną klasy i
                harmonii. Duże okna w salonie pozwalają na naturalne światło, co sprawia, że pomieszczenie jest jasne i
                przyjazne. Klasyczny salon to idealne miejsce do relaksu, spotkań z przyjaciółmi i rodzinnych spotkań.
                Jestem dumna z tego projektu, który połączył styl i funkcjonalność, tworząc wyjątkowe wnętrze.
            </p>
        ]
    },
    {
        id: 1,
        img1: project4,
        img2: project3,
        alt: 'Projekt 2',
        title: 'Skandynawskie salon',
        description: [
            <p className="description" key={0}>
                Skandynawski design opiera się na jasnych kolorach, naturalnych materiałach i minimalizmie. W naszym
                projekcie zastosowaliśmy biel i odcienie szarości, które tworzą spokojną i przyjemną atmosferę.
                Drewniane podłogi i meble dodają ciepła, a dodatki w stylu skandynawskim, takie jak miękkie pledy i
                poduszki, zapewniają komfort. Przestrzeń jest funkcjonalna i przemyślana, co czyni ją idealnym miejscem
                do odpoczynku i relaksu. Skandynawski salon to doskonały przykład prostoty i naturalności.
            </p>
        ]
    },
    {
        id: 2,
        img1: project5,
        img2: project6,
        alt: 'Projekt 3',
        title: 'Rustykalna sypialnia',
        description: [
            <p className="description" key={0}>
                Skandynawski design opiera się na jasnych kolorach, naturalnych materiałach i minimalizmie. W naszym
                projekcie zastosowaliśmy biel i odcienie szarości, które tworzą spokojną i przyjemną atmosferę.
                Drewniane podłogi i meble dodają ciepła, a dodatki w stylu skandynawskim, takie jak miękkie pledy i
                poduszki, zapewniają komfort. Przestrzeń jest funkcjonalna i przemyślana, co czyni ją idealnym miejscem
                do odpoczynku i relaksu. Skandynawski salon to doskonały przykład prostoty i naturalności.
            </p>
        ]
    }
];

export default projects;
