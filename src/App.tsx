import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ApiProvider from './provider/ApiProvider';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApiProvider>
          <Router>
            <Route path="/new-world">
              <Routes />
            </Route>
          </Router>
        </ ApiProvider>
      </header>
    </div>
  );
}

export default App;
