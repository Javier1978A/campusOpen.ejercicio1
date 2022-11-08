import logo from './logo.svg';
import './App.css';
import ComponenteA from './component/componenteA';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ComponenteA></ComponenteA>
    </div>
  );
}

export default App;
