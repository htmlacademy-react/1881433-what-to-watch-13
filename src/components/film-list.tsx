import CardItem from './card-item.tsx';
import { TFilm } from '../types/film-type.ts';

type FilmListProps = {
  films: TFilm[];
  onFilmHoverHandler?: (film: TFilm | null) => void;
}

function FilmList({ films, onFilmHoverHandler }: FilmListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CardItem
          content={film}
          key={film.id}
          onFilmHoverHandler={onFilmHoverHandler}
        />
      ))}
    </div>
  );
}

export default FilmList;
