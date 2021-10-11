import logo from './logo.svg';
// import './App.css';
import Home from "../src/components/Home"
import { CreateAccount } from './components/CreateAccount';

function App() {
  return (
    <div className="App">
      <Home />
      <CreateAccount />
    </div>
  );
}

export default App;
