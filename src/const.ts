const FILM_COUNT_PER_STEP = 8;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not-found-screen'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export { FILM_COUNT_PER_STEP };
