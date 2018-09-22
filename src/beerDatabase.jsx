import munnilogo from './assets/munnispez.png';
import chaemmifaeger from './assets/chaemmifaeger.png';
import schommellogo from './assets/schommelperle.png';
import bintellogo from './assets/bintelalt.png';
import sommerspezlogo from './assets/saisonspezial.png';
import dinkellogo from './assets/dinkel.png';
import dudellogo from './assets/dudelsack.png';

const defaultLocation = {
  name: 'Brauerei Herrenberg',
  postCode: '4412',
  town: 'Nuglar',
  street: 'Dorfplatz',
  streetNr: 12,
  website: 'herrrenbergbier.ch'
};
const defaultIngredients = {
  water: { ingredient: 'Water', allergen: false },
  malt: { ingredient: 'Malz', allergen: true },
  hops: { ingredient: 'Hopfen', allergen: false },
  yeast: { ingredient: 'Hefe', allergen: false }
};

const defaultInformation = {
  description: 'Gekühlt und vor Licht geschützt lagern.'
};
export const BEERDB = {
  chämmifäger: {
    name: 'CHÄMMI\nFÄGER',
    description:
      'Währschaftes Schwarzbier, von Hand gebraut us em solothurner Schwarzbuebeland Lebensqualität, Schluck für Schluck',
    location: defaultLocation,
    ingredients: defaultIngredients,
    alcoholContent: 4.8,
    information: defaultInformation,
    logo: chaemmifaeger
  },
  schommelperle: {
    name: 'SCHOMMEL\nPERLE',
    description:
      'Feines naturtrübes Weizenbier, von Hand gebraut us em solothurner Schwarzbuebeland Lebensqualität, Schluck für Schluck',
    location: defaultLocation,
    ingredients: {
      water: defaultIngredients.water,
      hops: defaultIngredients.hops,
      yeast: defaultIngredients.yeast,
      malt: { ingredient: 'Weizen-Malz', allergen: true }
    },
    alcoholContent: 5.0,
    information: defaultInformation,
    logo: schommellogo
  },
  munnispez: {
    name: 'MUNNI\nSPEZ',
    description:
      'Feines helles Lagerbier, von Hand gebraut us em solothurner Schwarzbuebeland Lebensqualität, Schluck für Schluck',
    location: defaultLocation,
    ingredients: defaultIngredients,
    alcoholContent: 5.2,
    information: defaultInformation,
    logo: munnilogo
  },
  saisonspezial: {
    name: 'SAISON\nSPEZIAL',
    description:
      'Spritziges helles Lagerbier, von Hand gebraut us em solothurner Schwarzbuebeland Lebensqualität, Schluck für Schluck',
    location: defaultLocation,
    ingredients: defaultIngredients,
    alcoholContent: 5.0,
    information: defaultInformation,
    logo: sommerspezlogo
  },
  bintelalt: {
    name: 'BINTEL\nALT',
    description:
      'Feines naturtrübes Amberbier, von Hand gebraut us em solothurner Schwarzbuebeland Lebensqualität, Schluck für Schluck',
    location: defaultLocation,
    ingredients: defaultIngredients,
    alcoholContent: 4.9,
    information: defaultInformation,
    logo: bintellogo
  },
  dinkel: {
    name: 'DINKEL',
    description:
      'Feines naturtrübes Dinkelbier, von Hand gebraut. Us em solothurner Schwarzbuebeland',
    location: defaultLocation,
    ingredients: {
      water: defaultIngredients.water,
      hops: defaultIngredients.hops,
      yeast: defaultIngredients.yeast,
      malt: { ingredient: 'Weizen-Malz, Dinkel', allergen: true }
    },
    alcoholContent: 5.0,
    information: defaultInformation,
    logo: dinkellogo
  },
  dudelsack: {
    name: 'DUDEL\nSACK',
    description:
      'Herb und kräftig, wie ein schotttisches Starkbier. Us em solothurner Schwarzbuebeland',
    location: defaultLocation,
    ingredients: defaultIngredients,
    alcoholContent: 7.0,
    information: defaultInformation,
    logo: dudellogo
  }
};
