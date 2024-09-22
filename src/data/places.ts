type Place = {
  name: string;
  description: string;
  image: string;
};

export const places: Place[] = [
  {
    name: "Forêt de Bois-Blanc",
    description: "Une magnifique forêt située à proximité du village.",
    image: "./src/assets/forest.jpg",
  },
  {
    name: "Anse des Cascades",
    description: "Un lieu incontournable avec des cascades magnifiques.",
    image: "./src/assets/cascade.jpg",
  },
  {
    name: "Ravine Glissante",
    description: "Un site naturel offrant des randonnées spectaculaires.",
    image: "./src/assets/ravine.jpg",
  },
  {
    name: "Mairie de Sainte Rose",
    description: "Le bâtiment administratif central de la ville.",
    image: "./src/assets/mairie.jpg",
  },
  {
    name: "Eglise Notre Dame des Laves",
    description: "Une église emblématique qui a survécu aux coulées de lave.",
    image: "./src/assets/eglise.jpg",
  },
  {
    name: "Pas de Bellecombe",
    description: "Un point de vue exceptionnel sur le volcan.",
    image: "./src/assets/pasdebellecombe.jpg",
  },
];
