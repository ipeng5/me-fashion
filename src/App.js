import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';

import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
