import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { FILMS } from './mock/films.ts';
import { FULL_FILM_INFO } from './mock/films.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      films={FILMS}
      fullFilmInfo={FULL_FILM_INFO}
    />
  </React.StrictMode>
);
