import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './components/Header';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
    </BrowserRouter>
  );
};

export default App;
