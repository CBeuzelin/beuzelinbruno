import IImage from "../../../app/shared/resources/interfaces/image.interface";

const folder = './assets/img/home-carousel/'

const images: IImage[] = [
  {
    src: `${folder}1-chaudiere-gaz-murale.png`,
    title: 'Chaudière gaz murale'
  },
  {
    src: `${folder}2-plomberie-chauffage.png`,
    title: 'Plomberie Chauffage'
  },
  {
    src: `${folder}3-salle-de-bain.png`,
    title: 'Salle de bain'
  },
  {
    src: `${folder}4-chauffage-au-sol.png`,
    title: 'Chauffage au sol'
  },
  {
    src: `${folder}5-poele-a-bois.png`,
    title: 'Poêle à bois'
  },
]

export default images;
