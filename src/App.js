import  { useState} from 'react';
import './App.css';

function App() {
 const [counter, setCounter] = useState(0);
  return (
    <div className="App">
       <button onClick={() => setCounter((prveCount) => prveCount - 1)}> -</button>
       <h1> {counter}</h1>
       <button>+</button>
    </div>
  );
}

export default App;
