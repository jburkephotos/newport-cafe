// Single source of truth for business facts. Edit here and it updates the
// whole site + JSON-LD schema. All values verified against the brief and the
// 2024 To-Go Menu PDF.

export const site = {
  name: 'Newport Cafe',
  legalName: 'The Newport Cafe',
  tagline: 'One of the most diverse menus in Newport, Oregon.',
  blurb:
    'Family-style coastal diner since 2008. Comfort food, fresh seafood, and ' +
    'famously huge portions — open 365 days a year.',
  established: '2008',

  phoneDisplay: '(541) 574-6847',
  phoneHref: 'tel:+15415746847',

  address: {
    street: '534 N Coast Hwy', // US-101, corner of NE 6th St
    city: 'Newport',
    region: 'OR',
    postalCode: '97365',
    country: 'US',
  },
  // Approximate — VERIFY exact pin before cutover (drop the pin in Google Maps).
  geo: { lat: 44.6452, lng: -124.0534 },

  // Google Maps deep link (name + address search is the most reliable).
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Newport+Cafe+534+N+Coast+Hwy+Newport+OR+97365',

  // Open 7 days, identical hours. 7:00 AM – 10:00 PM.
  hours: { open: '07:00', close: '22:00' },
  hoursDisplay: '7:00 AM – 10:00 PM, every day',
  hoursNote: 'Open 365 days a year',

  // Social proof / badges pulled from the printed menu cover.
  badges: ['Voted #1', 'Everything Homemade', 'Huge Portions', 'Open 7 Days'],

  // Pages.dev preview URL — fill in after first deploy (used nowhere critical yet).
  previewUrl: '',
};

// Used by JSON-LD. Astro builds in local time; these are wall-clock opening hours.
export const openingHours = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: site.hours.open, closes: site.hours.close },
];
