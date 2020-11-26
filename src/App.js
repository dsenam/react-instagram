import React from 'react'
import GlobalStyle from './styles/global'
import Routes from './routes/index'
import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header'

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <Header />
    </BrowserRouter>
    </>
  );
}

export default App;
