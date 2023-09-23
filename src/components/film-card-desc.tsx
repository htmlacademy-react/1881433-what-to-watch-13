type FilmCardDescProps = {
  name: string;
  genre: string;
  released: number;
}

function FilmCardDesc({name, genre, released}: FilmCardDescProps): JSX.Element {
  return (
    <>
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>
    </>
  );
}

export default FilmCardDesc;
