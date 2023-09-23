function GenresList(): JSX.Element {
  const genres = [
    'All genres',
    'Comedies',
    'Crime',
    'Documentary',
    'Dramas',
    'Horror',
    'Kids & Family',
    'Romance',
    'Sci-Fi',
    'Thrillers'
  ];
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre: string) => (
        <li key={genre} className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
