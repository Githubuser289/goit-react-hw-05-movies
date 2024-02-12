import styled from 'styled-components';

export const MainDiv = styled.div`
  > a {
    padding-top: 0px;
  }
  > h3 {
    margin-bottom: 10px;
  }
`;

export const MovieData = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid darkgrey;
  > img {
    width: 250px;
  }
  > div h2 {
    font-size: 1.7em;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;
  border-bottom: 2px solid darkgrey;
  > a {
    padding-left: 15px;
  }
`;
