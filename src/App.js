import React from 'react';
import Appbar from './components/AppBar';
import Table from './components/Table';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Appbar />
      <Table />
    </div>
  );
}

export default App;
