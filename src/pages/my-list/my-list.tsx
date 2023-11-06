import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { FILM_COUNT_PER_STEP } from '../../const.ts';
import { useAppSelector } from '../../hooks/index.ts';
import Header from '../../components/header.tsx';
import Footer from '../../components/footer.tsx';
import FilmList from '../../components/film-list.tsx';
import CatalogMoreBtn from '../../components/catalog-more-btn.tsx';

function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const [showMoreCard, setShowMoreCard] = useState(FILM_COUNT_PER_STEP);
  const loadMore = () => {
    setShowMoreCard((prev: number) => prev + FILM_COUNT_PER_STEP);
  };
  return (
    <div className="user-page">
      <Helmet>
        <title>MyList</title>
      </Helmet>

      <Header isMyList />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films.slice(0, showMoreCard)} />

        {showMoreCard >= films.length ? null : <CatalogMoreBtn films={films} CatalogMoreBtnClickHandler={loadMore} />}
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
