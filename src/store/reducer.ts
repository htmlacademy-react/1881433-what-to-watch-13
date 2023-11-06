import {createReducer} from '@reduxjs/toolkit';
import { /*showMoreBtntStep,*/ loadFilms, loadPromo, requireAuthorization, setError, setFilmsDataLoadingStatus } from './action.ts';
import { TFilms, TPromo } from '../types/film-type.ts';
import { /*FILM_COUNT_PER_STEP,*/ AuthorizationStatus } from '../const.ts';

//const STEP_COUNT = FILM_COUNT_PER_STEP;

type InitialState = {
  //step: FILM_COUNT_PER_STEP;
  films: TFilms;
  promo: TPromo;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  //step: FILM_COUNT_PER_STEP,
  films: [],
  promo: {
    id: '',
    name: '',
    posterImage: '',
    backgroundImage: '',
    videoLink: '',
    genre: '',
    released: 0,
    isFavorite: false
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

