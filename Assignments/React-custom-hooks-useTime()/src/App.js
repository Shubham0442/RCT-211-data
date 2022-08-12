
import './App.css';
import useTimeout from './CustiomHooks/UseTimeout';

function App() {

  const ready = useTimeout(5000)
  return (
    <div className="App">
       <h1>Custom Hooks</h1>
         <br/>
         <br/>
       <h2> { ready ? " I am ready": "Not ready Yet"}</h2>
      
    </div>
  );
}

export default App;
