import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app.tsx';
import ErrorMessage from './components/error-message.tsx';
//import { FILMS } from './mock/films.ts';
//import { FULL_FILM_INFO } from './mock/films.ts';
import { store } from './store/index.ts';
import {checkAuthAction, fetchFilmAction} from './store/api-actions.ts';


store.dispatch(fetchFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        //films={FILMS}
        //fullFilmInfo={FULL_FILM_INFO}
      />
    </Provider>
  </React.StrictMode>
);
