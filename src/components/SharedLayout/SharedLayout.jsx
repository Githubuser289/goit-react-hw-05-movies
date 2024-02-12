import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  // const [flag, setFlag] = useState(false);
  const location = useLocation();
  const txt = location.pathname;
  const isHomePage = txt.endsWith('movies/');

  useEffect(() => {
    const elem = document.getElementById('123');
    if (elem === null) return;
    if (isHomePage) {
      elem.children[0].classList.add('active');
      elem.children[1].classList.remove('active');
      // setFlag(item => !item);
      return;
    } else {
      elem.children[1].classList.add('active');
      elem.children[0].classList.remove('active');
      // setFlag(item => !item);
      return;
    }
  }, [isHomePage]);
  console.log('sharedLayout');
  return (
    <Container>
      <Header>
        <nav id="123">
          <Link
            to="/goit-react-hw-05-movies/"
            className={isHomePage ? 'active' : ''}
          >
            Home
          </Link>
          <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
        <Logo>
          <span role="img" aria-label="camera icon">
            🎥
          </span>{' '}
          The Movie DataBase
        </Logo>
      </Header>
      <Outlet />
    </Container>
  );
};
