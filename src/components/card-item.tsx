import { TFilm } from '../types/film-type.ts';
import { AppRoute } from '../const.ts';
import { Link } from 'react-router-dom';

type CardItemProps = {
  content: TFilm;
  onFilmHoverHandler?: (film: TFilm | null) => void;
}

function CardItem({ content, onFilmHoverHandler }: CardItemProps): JSX.Element {
  const {
    id,
    name,
    previewImage
  } = content;

  const filmOnMouseOverHandler = onFilmHoverHandler
    ? () => onFilmHoverHandler(content)
    : () => undefined;
  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={filmOnMouseOverHandler}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt="Bohemian Rhapsody" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default CardItem;
