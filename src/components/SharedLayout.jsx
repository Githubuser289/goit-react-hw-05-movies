import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Logo>
          <span role="img" aria-label="computer icon">
            🎥
          </span>{' '}
          The Movie DataBase
        </Logo>
      </Header>
      <Outlet />
    </Container>
  );
};
