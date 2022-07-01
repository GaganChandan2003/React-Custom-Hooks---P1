import './App.css';
import Usetimeout from './Hooks/Usetimeout';

function App() {
  const ready=Usetimeout();
  return (
    <div className="App">
      <h1>TimeOut</h1>
      <h2>
      {
      ready? "Ready":"Not Ready"
      }
      </h2>
    </div>
  );
}

export default App;
