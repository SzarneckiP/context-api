import React from 'react';
import './App.css';
import Page from './Page';
import Sidebar from './Sidebar';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <h2>Learn Context-API</h2>
      <ThemeProvider>
        <Page>
          <Sidebar theme='dark' />
        </Page>
      </ThemeProvider>
    </div >
  );
}

export default App;
