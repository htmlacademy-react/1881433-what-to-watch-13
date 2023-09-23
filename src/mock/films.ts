import { TFilm } from '../types/film-type.ts';

const FILMS: TFilm[] = [
  {
    id: '75499a31-c442-4467-9f8d-b56b19b70153',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'https://13.design.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: '4f87ca6c-834a-4008-85ec-115ce9fb431a',
    name: 'Bohemian Rhapsody',
    previewImage: 'https://13.design.pages.academy/static/film/preview/bohemian_rhapsody.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: 'fbb60755-578c-4c5e-a56e-2ea2899c348c',
    name: 'Macbeth',
    previewImage: 'https://13.design.pages.academy/static/film/preview/macbeth.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: '2316235a-9234-473d-9137-d12e3eb76421',
    name: 'Aviator',
    previewImage: 'https://13.design.pages.academy/static/film/preview/aviator.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: 'f8edb74c-b364-47e6-aeb2-87523de01fa4',
    name: 'We need to talk about Kevin',
    previewImage: 'https://13.design.pages.academy/static/film/preview/we-need-to-talk-about-kevin.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: 'd179807c-02ae-450e-ae02-afc33b8ac4ef',
    name: 'What We Do in the Shadows',
    previewImage: 'https://13.design.pages.academy/static/film/preview/what-we-do-in-the-shadows.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: 'a8be20d2-81a1-4f51-9671-5620379d03dd',
    name: 'The Revenant',
    previewImage: 'https://13.design.pages.academy/static/film/preview/revenant.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: '5d31ae11-c877-4525-973d-8257309c42bd',
    name: 'Johnny English',
    previewImage: 'https://13.design.pages.academy/static/film/preview/johnny-english.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: '827d7f58-c8c0-44bf-af42-1f8a6e1b88d8',
    name: 'Shutter Island',
    previewImage: 'https://13.design.pages.academy/static/film/preview/shutter-island.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: '196151f7-6373-4b44-bebd-429465645798',
    name: 'Pulp Fiction',
    previewImage: 'https://13.design.pages.academy/static/film/preview/pulp-fiction.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: '5635d1f4-091d-4f68-8b65-bc9e166f978e',
    name: 'No Country for Old Men',
    previewImage: 'https://13.design.pages.academy/static/film/preview/no-country-for-old-men.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: '33acf319-1eb3-480e-83e3-cdf142c372b0',
    name: 'Snatch',
    previewImage: 'https://13.design.pages.academy/static/film/preview/snatch.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: 'd0cd5215-a119-44be-9bf0-910a52af81f3',
    name: 'Moonrise Kingdom',
    previewImage: 'https://13.design.pages.academy/static/film/preview/moonrise-kingdom.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: '949ef6c6-eb3d-4f03-9b23-d31444f022ce',
    name: 'Seven Years in Tibet',
    previewImage: 'https://13.design.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: '4f77c270-c37d-4f89-b153-d75de07635a5',
    name: 'Midnight Special',
    previewImage: 'https://13.design.pages.academy/static/film/preview/midnight-special.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: 'c43905f5-9c00-43d2-9514-6933208c11b6',
    name: 'War of the Worlds',
    previewImage: 'https://13.design.pages.academy/static/film/preview/war-of-the-worlds.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: 'fbf1286c-f220-422a-b9d7-a8c1c5323a09',
    name: 'Dardjeeling Limited',
    previewImage: 'https://13.design.pages.academy/static/film/preview/dardjeeling_limited.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: '6eaeec70-b362-49e3-82d6-cff4752a913c',
    name: 'Orlando',
    previewImage: 'https://13.design.pages.academy/static/film/preview/orlando.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: 'c1cacc5c-b827-499d-9fad-50734ae0a7c1',
    name: 'Legend',
    previewImage: 'https://13.design.pages.academy/static/film/preview/legend.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: 'e5f9d8ba-45dc-454a-928a-f9a0a311671f',
    name: 'A Star Is Born',
    previewImage: 'https://13.design.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: 'ffb71f6d-15c6-4089-9f24-f67f950aadf6',
    name: 'Bronson',
    previewImage: 'https://13.design.pages.academy/static/film/preview/bronson.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: '29c9fb8d-e36b-4508-a2a5-ff55151a5d03',
    name: 'Gangs of new york',
    previewImage: 'https://13.design.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: '1351a7b7-98c4-4277-bf6a-4e3059399937',
    name: 'Beach',
    previewImage: 'https://13.design.pages.academy/static/film/preview/beach.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  },
  {
    id: 'da103d19-4512-4936-a001-19f23d08bd6c',
    name: 'Matrix',
    previewImage: 'https://13.design.pages.academy/static/film/preview/matrix.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4'
  },
  {
    id: 'a308923c-c8ce-4c29-a773-35630d69853b',
    name: 'Once Upon a Time in America',
    previewImage: 'https://13.design.pages.academy/static/film/preview/Once_Upon_a_Time_in_America.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4'
  }
];

const FULL_FILM_INFO = {
  id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://url-to-video/video.jpg',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: [ 'Bill Murray' ],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false
};

export { FILMS, FULL_FILM_INFO };
