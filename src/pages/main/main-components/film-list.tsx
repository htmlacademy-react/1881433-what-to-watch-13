import CardItem from '../../../components/card-item.tsx';
import { TFilm } from '../../../types/film-type.ts';

type FilmListProps = {
  films: TFilm[];
}

function FilmList({ films }: FilmListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CardItem
          content={film}
          key={film.id}
        />
      ))}
    </div>
  );
}

export default FilmList;
