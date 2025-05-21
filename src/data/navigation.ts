import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "#home"
  },
  {
    label: "Chi siamo",
    href: "#about"
  },
  {
    label: "Le nostre opere",
    href: "#works",
    children: [
      {
        label: "Ritratti",
        href: "#portraits"
      },
      {
        label: "Orologi",
        href: "#clocks"
      },
      {
        label: "Lampade",
        href: "#lamps"
      },
      {
        label: "Scatole decorative",
        href: "#boxes"
      }
    ]
  },
  {
    label: "Servizi",
    href: "#services"
  },
  {
    label: "Prezzi",
    href: "#pricing"
  },
  {
    label: "Contatti",
    href: "#contact"
  }
];