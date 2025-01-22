// src/App.js
import React from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Login Page</h1>
      </header>
      <main>
        <Login />
      </main>
    </div>
  );
}

export default App;
