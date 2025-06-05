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
    label: "Cosa facciamo",
    href: "#services"
  },
  {
    label: "Le nostre opere",
    href: "#works",
    children: []
  },
  // {
  //   label: "Servizi",
  //   href: "#services"
  // },
  {
    label: "Contatti",
    href: "#contact"
  }
];