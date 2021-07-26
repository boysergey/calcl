import './App.css';
import Counting from "./counting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eqbQA2i_oPPMzN-cZd9SFZDlo3JMW7cz9w&usqp=CAU} className="App-logo" alt="logo" />
        <h1>
          Calculator
        </h1>
        <Counting />
      </header>

    </div>
  );
}

export default App;
