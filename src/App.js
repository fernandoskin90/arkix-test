// @vendors
import React from 'react';
import { Provider } from 'react-redux';
import Appbar from './components/AppBar';
import Table from './components/Table';


import store from './redux/store';

// @styles
import './styles.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Appbar />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
