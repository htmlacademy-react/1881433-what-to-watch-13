import { Link } from 'react-router-dom';
import Logo from './logo.tsx';
import HeaderH1 from './header-h1.tsx';

type HeaderProps = {
  isMyList: boolean;
}

function Header({ isMyList }: HeaderProps): JSX.Element {
  return (
    <header className={isMyList ? 'page-header user-page__head' : 'page-header film-card__head'}>
      <Logo isFooter={false} />
      {isMyList && <HeaderH1 />}
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to="/mylist">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
