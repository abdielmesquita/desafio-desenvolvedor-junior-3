import styled from 'styled-components';
import { TabList, Tab, TabPanel } from 'react-tabs';

export const CustomTabList = styled(TabList)`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  list-style-type: none;
`;

export const CustomTab = styled(Tab)`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.backgroundColor};
  cursor: pointer;
  border: none;
  font-family: 'Opens Sans', sans-serif;
  font-size: 16px;
  outline: none;
  border-radius: 0 0 4px 4px;

  &.react-tabs__tab--selected {
    background-color: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.color};
    font-weight: bold;
    border: none;
  }
`;

export const CustomTabPanel = styled(TabPanel)`
  color: ${({ theme }) => theme.color};
  border-radius: 4px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.backgroundColor};
  border-radius: 8px;
  margin: 16px;

  @media (min-width: 768px) {
    width: calc(2/6 * 100%);
    margin: unset;
    margin-right: 16px;
    height: 60vh;
    border-radius: 8px;
  }
`;

export const TabContent = styled.div`
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
`;

export const Label = styled.label`
  // Estilos do input
`;

export const Input = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.backgroundColor};
  /* border: 1px solid ${({ theme }) => theme.highlight}; */
  height: 36px;
  padding: 8px;
  border-radius: 4px;
  margin: 0 16px;

  &:focus {
    /* Estilos para o input ativo */
    border-color: ${({ theme }) => theme.highlight};
  }

  &:focus-visible{
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.highlight};
  border: none;
  height: 36px;
  padding: 8px;
  border-radius: 4px;
  margin: 0 16px 16px;
`;
export const SuccessMessage = styled.p`
  background-color: ${({ theme }) => theme.highlight50};
  color: ${({ theme }) => theme.color};
  margin: 0 16px 16px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error};
  margin: 0 16px 16px;
  font-size: 13px;
  font-style: italic;
`;
