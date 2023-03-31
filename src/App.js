import logo from './logo.svg';
import './App.css';
import Tizesbol from './JS/Tizesbol';
import Proba from './JS/Proba';
import Kettesbol from './JS/Kettesbol';
import Tizenhatosbol from './JS/Tizenhatosbol';


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>**/}
      
      <div className='feher'></div>
        <Tizesbol />
      
      <div className='feher'></div>
        <Kettesbol />
      
      <div className='feher'></div>
        <Tizenhatosbol />
      
      {/*<Proba />*/}
    </div>
  );
}

export default App;
