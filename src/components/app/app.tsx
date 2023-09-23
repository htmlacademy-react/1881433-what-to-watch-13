import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import Main from '../../pages/main/main.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import { TFilm, TFullFilmInfo } from '../../types/film-type.ts';
import MyList from '../../pages/my-list/my-list.tsx';

type AppProps = {
  films: TFilm[];
  fullFilmInfo: TFullFilmInfo;
}

function App({ films, fullFilmInfo }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main
                films={films}
                fullFilmInfo={fullFilmInfo}
              />
            }
          />
          <Route
            path={AppRoute.MyList}
            element={<MyList />}
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
