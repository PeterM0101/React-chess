import React from 'react';
import logo from './logo.svg';
import './App.css';

function AppComponent() {
  // todo: rename variable name
  const hi = 'Hi';

  const getURL = () => {
    const url = document.location;
    console.log('url: ', url.origin)
    const a = 1;
    const b = 33;
    const result = a + b;
    console.log('result: ', result);
  };
  getURL();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {hi}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppComponent;
