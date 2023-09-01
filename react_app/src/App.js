import logo from './logo.svg';
import './App.css';
// for each expression that is returned, you need a parent element. React will not deal with child elements. Here "className: App" is the parent.
// maybe dont use react.fragment
function App() {

  return (
    <React.fragment>
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
          Learn React
        </a>
      </header>
    </div>
    </React.React.fragment>
  );
}

export default App;
