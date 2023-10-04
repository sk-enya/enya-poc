import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [state,setState] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <h2>{state}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BOBA Gateway POC
        </p>
        <button type="button" onClick={() => {setState(`Hello at ${new Date()}`)}}>Connect to MM</button>
        <a
          className="App-link"
          href="https://docs.boba.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <a
          className="App-link"
          href="https://gateway.boba.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gateway Prod !!
        </a>
      </header>
    </div>
  );
}

export default App;
