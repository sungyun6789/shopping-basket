import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Head from './components/Head';
import ItemList from './components/ItemList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    text-align: center;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Head />
      <Template>
        <ItemList />
      </Template>
    </>
  );
}

export default App;