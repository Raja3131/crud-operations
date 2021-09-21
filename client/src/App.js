import React from 'react';
import './App.css';
import DataList from './components/DataList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <Clock/>

    <h2>Add Data</h2>

    <DataList />
    </header>
    </div>
  );
}

export default App;
