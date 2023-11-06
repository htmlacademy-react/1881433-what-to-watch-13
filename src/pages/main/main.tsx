import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, /*useAppDispatch*/ } from '../../hooks/index.ts';
import { FILM_COUNT_PER_STEP } from '../../const.ts';
import Header from '../../components/header.tsx';
import FilmCardDesc from '../../components/film-card-desc.tsx';
import PlayBtn from '../../components/play-btn.tsx';
import AddMyListBtn from '../../components/add-mylist-btn.tsx';
import GenresList from '../../components/genres-list.tsx';
import FilmList from '../../components/film-list.tsx';
import CatalogMoreBtn from '../../components/catalog-more-btn.tsx';
import Footer from '../../components/footer.tsx';

function Main(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const promo = useAppSelector((state) => state.promo);
  const {
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
  } = promo;
  const [showMoreCard, setShowMoreCard] = useState(FILM_COUNT_PER_STEP);
  const loadMore = () => {
    setShowMoreCard((prev: number) => prev + FILM_COUNT_PER_STEP);
  };
  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isMyList={false} />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmCardDesc
                name={name}
                genre={genre}
                released={released}
              />

              <div className="film-card__buttons">

                <PlayBtn />

                <AddMyListBtn />

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmList films={films.slice(0, showMoreCard)} />

          {showMoreCard >= films.length ? null : <CatalogMoreBtn films={films} CatalogMoreBtnClickHandler={loadMore} />}

        </section>

        <Footer />

      </div>
    </>
  );
}

export default Main;
