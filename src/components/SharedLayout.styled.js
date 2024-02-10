// Color ideas:
// aqua
// cadetblue
// cornflowerblue
// cyan
// darkturquoise
// deepskyblue
// dodgerblue
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  // max-width: 960px;
  margin: 0 auto;
  // padding: 0 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 30px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: darkblue;

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin: 0 10px 5px 0;
  color: darkgray;
  > span {
    font-size: 35px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 22px;
  color: lightblue;

  &.active {
    color: white;
    background-color: cornflowerblue;
  }
`;
