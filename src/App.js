import React from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
// import Projects from './components/Projects';
import Resume from './components/Resume';
// import logo from './assets/images/banner.gif';
import './App.css';
import './output.css';

function App() {
  return (
    <div>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <About></About>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;