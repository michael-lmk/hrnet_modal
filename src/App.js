import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal';

function App() {

  const [first, setfirst] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
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
        <button onClick={() => setfirst(true)}>open / close</button>
      </header>

      <Modal style={{ borderRadius: 20}} onBackDropPress={() => { setfirst(() => !first) }} isVisible={first}>
        <div className='close-btn' onClick={() => setfirst(!first)}>x</div>
        <p className='modal-msg'>Employee Created !</p>
      </Modal>
    </div>
  );
}

export default App;
