import React from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
// import Projects from './components/Projects';
// import Resume from './components/Resume';
// import logo from './assets/images/banner.gif';
import './App.css';
import './output.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <About></About>
{/*         <Navigation></Navigation>
        <Projects></Projects>
        <Resume></Resume> */}
      </main>
    </div>
  );
}

export default App;