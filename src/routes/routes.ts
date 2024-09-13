import { linksType } from "../types/ui_types";

export const links: linksType[] = [
  { to: "/", className: (nav: { isActive: any; }) => nav.isActive ? "nav-active" : "", text: "Accueil" },
  { to: "/thingstodo", className: (nav: { isActive: any; }) => nav.isActive ? "nav-active" : "", text: "Choses à faire" },
  { to: "/events", className: (nav: { isActive: any; }) => nav.isActive ? "nav-active" : "", text: "Événements" },
  { to: "/lodging", className: (nav: { isActive: any; }) => nav.isActive ? "nav-active" : "", text: "Où se loger" },
  { to: "/history", className: (nav: { isActive: any; }) => nav.isActive ? "nav-active" : "", text: "Histoire de la ville" },
  { to: "/foodservice", className: (nav: { isActive: any; }) => nav.isActive ? "nav-active" : "", text: "Restauration" },
];