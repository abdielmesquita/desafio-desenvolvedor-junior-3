import React, { useState } from 'react';
import { Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { login, register } from '../../services/api';
import {
  Container,
  TabContent,
  Form,
  Input,
  Button,
  CustomTabList,
  CustomTab,
  CustomTabPanel,
  SuccessMessage,
  ErrorMessage,
} from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Lógica adicional após o login ser realizado com sucesso
    } catch (error) {
      setRegistrationError(error.message || 'Login failed');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      setRegistrationSuccess(true);
      setActiveTabIdx(0);
      setSuccessMessage('Cadastro realizado com sucesso. Realize o login abaixo.');
      setRegistrationError('');
      // Lógica adicional após o registro ser realizado com sucesso
    } catch (error) {
      setRegistrationSuccess(false);
      setRegistrationError(error.message || 'Registration failed');
    }
  };

  const handleTabSelect = (index) => {
    setActiveTabIdx(index);
    if (activeTabIdx === 1) {
      setRegistrationSuccess(false);
    }
  };

  return (
    <Container>
      <Tabs selectedIndex={activeTabIdx} onSelect={handleTabSelect}>
        <CustomTabList>
          <CustomTab>Entrar</CustomTab>
          <CustomTab>Inscrever-se</CustomTab>
        </CustomTabList>

        <CustomTabPanel>
          {registrationSuccess && activeTabIdx === 0 && (
            <SuccessMessage>{successMessage}</SuccessMessage>
          )}
          {registrationError && activeTabIdx === 0 && (
            <ErrorMessage>{registrationError}</ErrorMessage>
          )}
          <TabContent>
            <Form onSubmit={handleLogin} autoComplete="off">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit">Login</Button>
            </Form>
          </TabContent>
        </CustomTabPanel>

        <CustomTabPanel>
          {registrationSuccess && activeTabIdx === 1 && (
            <>
              <p>Mensagem de sucesso aqui</p>
              <p>Email: </p>
              <p>{email}</p>
            </>
          )}
          {registrationError && activeTabIdx === 1 && (
            <ErrorMessage>{registrationError}</ErrorMessage>
          )}
          <TabContent>
            <Form onSubmit={handleRegister}>
              <Input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <Button type="submit">Inscrever-se agora</Button>
            </Form>
          </TabContent>
        </CustomTabPanel>
      </Tabs>
    </Container>
  );
}
