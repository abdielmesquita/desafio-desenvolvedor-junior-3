import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  margin: 0 16px;
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.backgroundColor};
  height: 20vh;
  border-radius: 0 0 8px 8px;

  img{
    object-fit: contain;
    width: 220px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: calc(4/6 * 100%);
    margin-right: 16px;
    padding: 16px;
    height: 60vh;
    border-radius: 8px;
    align-items: center;

    img{
      margin: unset;
      width: 340px;
    }
  }
`;
