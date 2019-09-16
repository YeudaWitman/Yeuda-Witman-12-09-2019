import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
        <Main />
    </BrowserRouter>
  );
}

export default App;