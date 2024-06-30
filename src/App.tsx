import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import GetByRole from "./components/GetByRole";
import GetAllByRole from "./components/GetAllByRole";
import QueryBy from "./components/QueryBy";
import FindBy from "./components/FindBy";
import MouseInteractions from "./components/MouseInteractions";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./mui/MuiMode";

const skills = ["HTML", "CSS", "JS", "TS"];

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Greeting name="Vig" />
        <GetByRole />
        <GetAllByRole skills={skills} />
        <QueryBy skills={skills} />
        <FindBy skills={skills} />
        <MouseInteractions />

        <MuiMode />

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
    </AppProviders>
  );
}

export default App;
