import classNames from 'classnames';
import { Link } from 'react-router-dom';

type LogoProps = {
  isFooter: boolean;
}

function Logo({ isFooter }: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link className={isFooter ? classNames('logo__link', 'logo__link--light') : 'logo__link'} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
