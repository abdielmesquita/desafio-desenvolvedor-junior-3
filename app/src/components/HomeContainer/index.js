import { Container } from './styles';
import HomeHero from '../HomeHero';
import Login from '../Login';

export default function HomeContainer() {
  return (
    <Container>
      <HomeHero />
      <Login />
    </Container>
  );
}
