import { TFilm } from '../types/film-type.ts';

type CardItemProps = {
  content: TFilm;
}

function CardItem({ content }: CardItemProps): JSX.Element {
  const {
    name,
    previewImage
  } = content;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt="Bohemian Rhapsody" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default CardItem;
