import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

export default function HomeHero() {
  return (
    <Container>
      <img src={logo} alt="Micro Blog" />
    </Container>
  );
}
