import Logo from './logo.tsx';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo isFooter />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
