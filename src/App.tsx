import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import MainChats from './components/MainChats';
import MainD3 from './components/MainD3';

function App() {
  const theme = {
    open: 'red',
    close: 'blue',
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <MainChats/>
        <MainD3/>
      </ThemeProvider>
    </>
  );
}

export default App;
