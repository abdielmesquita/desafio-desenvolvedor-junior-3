import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/style/global';
import defaulTheme from '../../assets/style/themes/default';

import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaulTheme}>
        <GlobalStyles />

        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
