// The Newport Cafe superhero cast — the café's OWN commissioned artwork
// (2017, real people, café-owned). Extracted as transparent PNGs from the
// official To-Go Menu source files. NOT AI-generated.
//
// `name` and `tagline` are PROVISIONAL — Jeremy / the café confirm the real
// character names and approve/replace the taglines. `audio` is a hook for
// optional tap-to-speak clips Jeremy can add later (never autoplay).

import founder from '../assets/characters/founder.png';
import bolt from '../assets/characters/bolt.png';
import limelight from '../assets/characters/limelight.png';
import queenM from '../assets/characters/queen-m.png';
import babyface from '../assets/characters/babyface.png';

export const characters = [
  {
    id: 'founder',
    name: 'The Founder',
    img: founder,
    tagline: 'Est. 2008. Big portions are kind of my superpower.',
    hero: true,        // flies in once on load
    showOnMobile: true,
    audio: null,
  },
  {
    id: 'bolt',
    name: 'Bolt',
    img: bolt,
    tagline: 'Seated, poured, and fed before you finish the menu.',
    showOnMobile: true,
    audio: null,
  },
  {
    id: 'limelight',
    name: 'Limelight',
    img: limelight,
    tagline: "I slice the 8-pound burger so you don't have to.",
    showOnMobile: false,
    audio: null,
  },
  {
    id: 'queen-m',
    name: 'Queen M',
    img: queenM,
    tagline: 'I remember your usual — and your usual’s usual.',
    showOnMobile: false,
    audio: null,
  },
  {
    id: 'babyface',
    name: 'Babyface',
    img: babyface,
    tagline: "Don't let the face fool you. I'll out-eat you.",
    showOnMobile: false,
    audio: null,
  },
];
