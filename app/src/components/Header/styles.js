import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.backgroundColor};
  height: 100px;
    padding: 16px;
    align-items: center;

  img{
    object-fit: contain;
    height: 35px;
  }

  @media (min-width: 768px) {
    img{
      margin: unset;
    }
  }
`;
