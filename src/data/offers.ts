import AutismAndADHD from '../images/Autism_and_ADHD.webp';
import InnerSpark1 from '../images/InnerSpark1.webp';
import NarcissmHelp from '../images/NarcissmHelp.webp';

interface Offer {
    id: string;
    title: string;
    description: string;
    image: string;
    details: string;
  }

export const offers: Offer[] = [
    {
      id: '1',
      title: 'Coaching für Persönlichkeitsentwicklung',
      description: 'Entfalten Sie Ihr volles Potenzial mit maßgeschneiderten Coaching-Sitzungen, die Ihre Stärken und Ziele in den Mittelpunkt stellen.',
      image: AutismAndADHD,
      details: 'Detaillierte Informationen über Persönlichkeitsentwicklung...',
    },
    {
      id: '2',
      title: 'Stressbewältigung & Achtsamkeit',
      description: 'Lernen Sie, mit Stress umzugehen und Achtsamkeit in Ihr Leben zu integrieren, um mehr innere Ruhe und Klarheit zu gewinnen.',
      image: NarcissmHelp,
      details: 'Detaillierte Informationen über Stressbewältigung & Achtsamkeit...',
    },
    {
      id: '3',
      title: 'Berufscoaching & Karriereentwicklung',
      description: 'Erreichen Sie Ihre beruflichen Ziele mit einem fokussierten Coaching-Ansatz, der Sie auf Ihrem Karriereweg unterstützt.',
      image: InnerSpark1,
      details: 'Detaillierte Informationen über Berufscoaching & Karriereentwicklung...',
    },
  ];