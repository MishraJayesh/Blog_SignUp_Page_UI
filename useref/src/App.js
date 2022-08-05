import './App.css';
import Test from './customhooks/index.js';
import Memoization from './customhooks2';
import Counterapp from './customhooks2/main';

function App() {
  return (
    <div className="App">
     < Test />
     < Memoization />
     < Counterapp />
    </div>
  );
}

export default App;
