import { PriceItem } from '../types';

export const pricingData: PriceItem[] = [
  {
    id: "portrait-small",
    service: "Ritratto personalizzato (Piccolo)",
    description: "Ritratto inciso al laser 5″×7″ su legno pregiato",
    basePrice: "75€",
    notes: "Il prezzo varia in base al livello di dettaglio e al tipo di legno"
  },
  {
    id: "portrait-medium",
    service: "Ritratto personalizzato (Medio)",
    description: "Ritratto inciso al laser 8″×10″ su legno pregiato",
    basePrice: "120€",
    notes: "Include opzioni di cornice base"
  },
  {
    id: "portrait-large",
    service: "Ritratto personalizzato (Grande)",
    description: "Ritratto inciso al laser 11″×14″ o più grande su legno pregiato",
    basePrice: "180€+",
    notes: "Dimensioni personalizzate disponibili su richiesta"
  },
  {
    id: "clock-wall",
    service: "Orologio da parete",
    description: "Orologio da parete di 30 cm di diametro con design inciso al laser",
    basePrice: "95€",
    notes: "Movimento al quarzo silenzioso incluso"
  },
  {
    id: "lamp-table",
    service: "Lampada da tavolo",
    description: "Lampada da tavolo in legno con paralume inciso al laser",
    basePrice: "150€",
    notes: "Componenti LED inclusi"
  },
  {
    id: "box-small",
    service: "Scatola decorativa (Piccola)",
    description: "Scatola in legno incisa al laser con design personalizzato e intarsio",
    basePrice: "65€",
    notes: "Disponibili diverse opzioni di legno"
  },
  {
    id: "custom-sign",
    service: "Insegna personalizzata",
    description: "Insegna in legno personalizzata con testo e disegni incisi al laser",
    basePrice: "45€+",
    notes: "Prezzo in base a dimensione e complessità"
  },
  {
    id: "custom-project",
    service: "Progetto personalizzato",
    description: "Progetto di falegnameria laser su misura secondo le tue specifiche",
    basePrice: "Contattaci per un preventivo",
    notes: "Consulenza gratuita disponibile"
  }
];