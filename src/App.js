import React from 'react';
import GlobalStyle from './style/AppStyle';
import Head from './components/Head';
import Template from './components/Template';
import ItemList from './components/ItemList';

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