import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{ window.__RUNTIME_CONFIG__.REACT_APP_VARIABLE_UNO }</h2>
          <h2>{ window.__RUNTIME_CONFIG__.REACT_APP_VARIABLE_DOS }</h2>
        </a>
      </header>
    </div>
  );
}

export default App;
