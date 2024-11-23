import './App.css';
import Animal from "./components/Animal";
import { animals } from "./data/AnimalsDb";
import "./assets/css/style.css";

function App() {
  return (
    <div>
      <div className="header">
        <h1>Animal Matching Game</h1>
      </div>
      <div className="container">
        <Animal animal={animals}></Animal>
      </div>
    </div>
  );
}

export default App;
