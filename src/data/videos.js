// Videos featured on the homepage. Two kinds:
//   { type: 'youtube', id: '<11-char id>', label }            ← loads YouTube on click
//   { type: 'file', src, poster, orientation, label }         ← self-hosted mp4, loads on click
// `orientation: 'portrait'` pillarboxes a vertical phone clip inside the 16:9 card.
export const videos = [
  { type: 'youtube', id: 'oQH1RSreRqU', label: 'The 8 lb Super Ultimate Monster Burger Challenge' },
  { type: 'youtube', id: 'z8aArA57llo', label: 'Monster Burger Challenge with Jeff Speakman' },
  { type: 'youtube', id: 'GmDpqc4Snp8', label: '“Big” — the Super Ultimate Monster Burger' },
  { type: 'youtube', id: 'Z3_QsxuihQE', label: 'Newport Cafe — “Batter Up”' },
  { type: 'youtube', id: 'UBjP80uKTQ4', label: 'Introducing the Fabulous Newports' },
  { type: 'youtube', id: '_r1b3B25mP8', label: 'Welcome to the Newport Cafe' },
  { type: 'file', src: '/videos/answering-phone.mp4', poster: '/videos/answering-phone.jpg', orientation: 'landscape', label: 'Around the Newport Cafe' },
  { type: 'file', src: '/videos/family-dining.mp4', poster: '/videos/family-dining.jpg', orientation: 'portrait', label: 'Family dining, 7 days a week' },
];
