import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { useAppSelector } from '../../hooks/index.ts';
import AppPrivateRoute from '../private-route.tsx';
import Main from '../../pages/main/main.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import MyList from '../../pages/my-list/my-list.tsx';
import SignIn from '../../pages/sign-in/sign-in.tsx';
import Film from '../../pages/film/film.tsx';
import LoadingScreen from '../../pages/loading-screen/loading-screen.tsx';

function App() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main />
            }
          />
          <Route
            path={AppRoute.SignIn}
            element={
              <SignIn />
            }
          />
          <Route
            path={AppRoute.MyList}
            element={
              <AppPrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MyList />
              </AppPrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Film}/:filmId`}
            element={
              <Film />
            }
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;
