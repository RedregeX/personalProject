import mainimg from './images/shrek.jfif';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><a href="https://github.com/RedregeX" className="headerTextxLink">github.com/RedregeX</a></p>
        <p className="headerTextxLink">Welcome to my personal website, kinda just messing around.</p>
        <img src={mainimg} className="App-logo" alt="shrek" />
      </header>
      <Main />
    </div>
  );
}

export default App;
