type Place = {
  name: string;
  description: string;
  image: string;
};

import forest from "../assets/forest.jpg";
import cascade from "../assets/cascade.jpg";
import ravine from "../assets/ravine.jpg";
import mairie from "../assets/mairie.jpg";
import eglise from "../assets/eglise.jpg";
import pasdebellecombe from "../assets/pasdebellecombe.jpg";

export const places: Place[] = [
  {
    name: "Forêt de Bois-Blanc",
    description: "Une magnifique forêt située à proximité du village.",
    image: forest,
  },
  {
    name: "Anse des Cascades",
    description: "Un lieu incontournable avec des cascades magnifiques.",
    image: cascade,
  },
  {
    name: "Ravine Glissante",
    description: "Un site naturel offrant des randonnées spectaculaires.",
    image: ravine,
  },
  {
    name: "Mairie de Sainte Rose",
    description: "Le bâtiment administratif central de la ville.",
    image: mairie,
  },
  {
    name: "Eglise Notre Dame des Laves",
    description: "Une église emblématique qui a survécu aux coulées de lave.",
    image: eglise,
  },
  {
    name: "Pas de Bellecombe",
    description: "Un point de vue exceptionnel sur le volcan.",
    image: pasdebellecombe,
  },
];
