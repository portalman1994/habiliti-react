import './App.css';
import React, { Component } from 'react';
import { DBConfig } from './services/DBConfig';
import { initDB } from 'react-indexed-db';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

initDB(DBConfig);

class App extends Component {
  render () {
  return (
    <BrowserRouter>
    <div className="App">
        <Main />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
