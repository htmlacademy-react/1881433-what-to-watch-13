const FILM_COUNT_PER_STEP = 8;

const TIMEOUT_SHOW_ERROR = 2000;

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not-found-screen'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Film = '/films',
  Promo = '/promo',
  SignIn = '/login',
  SignOut = '/logout',
}

export {
  FILM_COUNT_PER_STEP,
  TIMEOUT_SHOW_ERROR,
  AppRoute,
  AuthorizationStatus,
  APIRoute,
};

