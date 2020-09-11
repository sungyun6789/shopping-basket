import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import HeadBlock from './components/Head';
import ItemList from './components/ItemList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    text-align: center;
  }

  .a {
    text-align: center;
    text-decoration: none;
    width: 100%;
    line-height: 70px;
    margin: 8px;
    padding: 4px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    background-color: #42a5f5;
    border: none;
    border-radius: 7.7px;
    font-family: 'Gothic A1', sans-serif;

    transition: color 0.5s;
    :hover {
      color: black; 
    }
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <HeadBlock />
        <ItemList />
      </Template>
    </>
  );
}

export default App;