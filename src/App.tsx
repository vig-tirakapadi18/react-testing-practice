import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import GetByRole from "./components/GetByRole";

function App() {
  return (
    <div className="App">
      <Greeting name="Vig" />
      <GetByRole />
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
