import React from 'react';
import './App.css';
import ApiProvider from './provider/ApiProvider';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApiProvider>
          <Routes />
        </ ApiProvider>
      </header>
    </div>
  );
}

export default App;
