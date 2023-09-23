import { TFilm } from '../types/film-type.ts';
import classNames from 'classnames';
import { FILM_COUNT_PER_STEP } from '../const.ts';

type CatalogMoreBtnProps = {
  films: TFilm[];
  CatalogMoreBtnClickHandler?: (value: React.SetStateAction<number>) => void;
}

function CatalogMoreBtn({films, CatalogMoreBtnClickHandler}: CatalogMoreBtnProps): JSX.Element {
  const handleButtonClick = () => {
    if (CatalogMoreBtnClickHandler) {
      CatalogMoreBtnClickHandler((prevCount) => prevCount + FILM_COUNT_PER_STEP);
    }
  };
  return (
    <div className={films.length < FILM_COUNT_PER_STEP ? classNames('catalog__more', 'visually-hidden') : 'catalog__more'}>
      <button className="catalog__button" type="button" onClick={handleButtonClick}>Show more</button>
    </div>
  );
}

export default CatalogMoreBtn;
