import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';


import { GlobalStyles } from './styles/GlobalStyles';
import { useThemeToggler } from './hooks/useThemeToggler';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';

function App() {

  const { theme, themeToggler } = useThemeToggler();


  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header themeToggler={themeToggler} />
      <Layout />
      <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
