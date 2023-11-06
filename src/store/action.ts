import {createAction} from '@reduxjs/toolkit';
import { TFilms, TPromo } from '../types/film-type.ts';
import { AuthorizationStatus } from '../const.ts';

export const showMoreBtntStep = createAction('app/showMoreBtntStep');

export const loadFilms = createAction<TFilms>('data/loadFilms');

export const loadPromo = createAction<TPromo>('data/loadPromo');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setPromoDataLoadingStatus = createAction<boolean>('data/setPromoDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');
