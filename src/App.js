<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent';
import './App.css';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
  }
}

export default App;
