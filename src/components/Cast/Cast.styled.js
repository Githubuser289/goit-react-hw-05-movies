import styled from 'styled-components';

export const Gallery = styled.main`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  flex-wrap: wrap;
  > div {
    width: 180px;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    padding: 0 5px;
  }
  > div img {
    width: 100%;
  }
  > div span {
    font-size: 18px;
  }
  > div i {
    word-wrap: break-word;
  }
`;
