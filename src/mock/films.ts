import { TFilm } from '../types/film-type.ts';

const FILMS: TFilm[] = [
  {
    id: '17a0f38a-e9b3-48e6-8f20-a2cd28dfdaa0',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'https://13.design.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Fantasy'
  },
  {
    id: '345a742d-e05f-4ef1-81d5-c49adb4c0ed6',
    name: 'Bohemian Rhapsody',
    previewImage: 'https://13.design.pages.academy/static/film/preview/bohemian_rhapsody.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Drama'
  },
  {
    id: '155bd421-cad8-45a6-890f-885b24d34f35',
    name: 'Macbeth',
    previewImage: 'https://13.design.pages.academy/static/film/preview/macbeth.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Drama'
  },
  {
    id: '7608f902-f04f-410a-b1fa-f17abac7e940',
    name: 'Aviator',
    previewImage: 'https://13.design.pages.academy/static/film/preview/aviator.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Drama'
  },
  {
    id: '619b6afb-b522-4d0a-9e47-bc4cfecabbcf',
    name: 'We need to talk about Kevin',
    previewImage: 'https://13.design.pages.academy/static/film/preview/we-need-to-talk-about-kevin.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Drama'
  },
  {
    id: '4bf9d780-1efa-456e-bfb3-cfca5449101d',
    name: 'What We Do in the Shadows',
    previewImage: 'https://13.design.pages.academy/static/film/preview/what-we-do-in-the-shadows.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Comedy'
  },
  {
    id: '144b3d38-3637-4f76-88cd-f2238351e4a0',
    name: 'The Revenant',
    previewImage: 'https://13.design.pages.academy/static/film/preview/revenant.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Action'
  },
  {
    id: '26da3831-b542-4b20-97d6-989acd2b02b7',
    name: 'Johnny English',
    previewImage: 'https://13.design.pages.academy/static/film/preview/johnny-english.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Comedy'
  },
  {
    id: '3fc39d14-68f0-4c2b-86b0-af2ad7ec784c',
    name: 'Shutter Island',
    previewImage: 'https://13.design.pages.academy/static/film/preview/shutter-island.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Thriller'
  },
  {
    id: 'fbb8e1eb-2046-4cb2-9816-0b05dfbae477',
    name: 'Pulp Fiction',
    previewImage: 'https://13.design.pages.academy/static/film/preview/pulp-fiction.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Crime'
  },
  {
    id: '1ac39dc4-d4ce-4dd8-bc34-cbfed4dd05a8',
    name: 'No Country for Old Men',
    previewImage: 'https://13.design.pages.academy/static/film/preview/no-country-for-old-men.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Crime'
  },
  {
    id: '842cfe12-bc81-46a9-9758-aca5c06498e9',
    name: 'Snatch',
    previewImage: 'https://13.design.pages.academy/static/film/preview/snatch.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Comedy'
  },
  {
    id: '0bc26bef-e7f9-415c-b898-49bc86eb4581',
    name: 'Moonrise Kingdom',
    previewImage: 'https://13.design.pages.academy/static/film/preview/moonrise-kingdom.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Adventure'
  },
  {
    id: 'eba49325-bdab-4217-888e-ed228f1a6815',
    name: 'Seven Years in Tibet',
    previewImage: 'https://13.design.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Adventure'
  },
  {
    id: 'a72a7c67-fcbe-4c1d-9519-40484a32da1a',
    name: 'Midnight Special',
    previewImage: 'https://13.design.pages.academy/static/film/preview/midnight-special.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Action'
  },
  {
    id: 'aeecff5b-abc0-4e41-9d1b-23ff3f700871',
    name: 'War of the Worlds',
    previewImage: 'https://13.design.pages.academy/static/film/preview/war-of-the-worlds.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Adventure'
  },
  {
    id: '3b420acf-9565-49ab-9b5c-e3367232a92d',
    name: 'Dardjeeling Limited',
    previewImage: 'https://13.design.pages.academy/static/film/preview/dardjeeling_limited.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Adventure'
  },
  {
    id: 'e0de1993-c046-44b0-9e86-a4192cf7f8db',
    name: 'Orlando',
    previewImage: 'https://13.design.pages.academy/static/film/preview/orlando.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Drama'
  },
  {
    id: 'e4c412b7-4d9a-4a10-a687-18c34bd2ed98',
    name: 'Legend',
    previewImage: 'https://13.design.pages.academy/static/film/preview/legend.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Crime'
  },
  {
    id: '7abed231-8a58-4c5a-8819-047d4e582f09',
    name: 'A Star Is Born',
    previewImage: 'https://13.design.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Drama'
  },
  {
    id: '7f954388-2774-4ba0-ad52-b8d234b0439b',
    name: 'Bronson',
    previewImage: 'https://13.design.pages.academy/static/film/preview/bronson.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Action'
  },
  {
    id: 'c8164e8f-1156-490c-95f7-52666b51f60a',
    name: 'Gangs of new york',
    previewImage: 'https://13.design.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/dog.mp4',
    genre: 'Crime'
  },
  {
    id: '27081c4b-3255-409e-b451-bd0bdc3d6826',
    name: 'Beach',
    previewImage: 'https://13.design.pages.academy/static/film/preview/beach.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Adventure'
  },
  {
    id: '7cba8ac1-9f2e-480a-b913-9419add40975',
    name: 'Matrix',
    previewImage: 'https://13.design.pages.academy/static/film/preview/matrix.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Action'
  },
  {
    id: 'def24419-7296-4385-b097-785e8a6aad53',
    name: 'Once Upon a Time in America',
    previewImage: 'https://13.design.pages.academy/static/film/preview/Once_Upon_a_Time_in_America.jpg',
    previewVideoLink: 'https://13.design.pages.academy/static//film/video/traffic.mp4',
    genre: 'Crime'
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

export { FILMS, FULL_FILM_INFO};
