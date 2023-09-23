import service1 from '../assets/img/tunnel.jpg';
import service2 from '../assets/img/plan.jpg';
import service3 from '../assets/img/blackstairs.jpg';
import service4 from '../assets/img/windows.jpg';

const services = [
    {
        img: service1,
        alt: 'Rozmowa',
        circle1: 'circle circle-1',
        circle2: 'circle circle-2',
        title: 'Krok 1: Wstępna rozmowa i przedstawienie wizji',
        description:
            'Na tym etapie omawiamy Twoje oczekiwania, preferencje i wizję dotyczącą wnętrza, które chcesz stworzyć. Dokładnie dowiem się, jakie są Twoje potrzeby, styl życia oraz estetyczne preferencje. To pozwoli mi lepiej zrozumieć, jak mogę dostosować projekt do Ciebie.'
    },
    {
        img: service2,
        alt: 'Analiza',
        circle1: 'circle circle-3',
        circle2: '',
        title: 'Krok 2: Analiza przestrzeni i propozycja projektu',
        description:
            'Po zebraniu informacji z pierwszej rozmowy przystępuje do analizy przestrzeni, z którą będę pracować. Opracowuje dla Ciebie wstępną propozycję projektu uwzględniając wszelkie elementy. Na tym etapie przedstawiam wstępne pomysły, abyśmy mogli razem doprecyzować koncepcję i dostosować ją do Twoich oczekiwań.'
    },
    {
        img: service3,
        alt: 'Wycena',
        circle1: '',
        circle2: 'circle circle-4',
        title: 'Krok 3: Szczegółowa wycena',
        description:
            'Po lepszym zrozumieniu Twoich preferencji, przystępuje do przygotowania wyceny projektu. Uwzględnia ona szacowane koszty oraz czas realizacji projektu. Przedstawiamy Ci również harmonogram prac, abyś wiedział, kiedy możesz oczekiwać poszczególnych etapów projektu.'
    },
    {
        img: service4,
        alt: 'Podpisanie umowy',
        circle1: 'circle circle-5',
        circle2: 'circle circle-6',
        title: 'Krok 4: Podpisanie umowy i rozpoczęcie prac',
        description:
            'Gdy wycena zostanie zaakceptowana, przechodzimy do podpisania umowy. Po podpisaniu umowy rozpoczynam prace nad Twoim projektem. Będziesz na bieżąco informowany o postępach i będziesz mieć okazję wnosić ewentualne uwagi lub zmiany.'
    }
];

export default services;
