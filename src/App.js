import React, { useState } from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
// import Projects from './components/Projects';
import Resume from './components/Resume';
// import logo from './assets/images/banner.gif';
import './App.css';
import './output.css';

function App() {
  const [resumeSelected, setResumeSelected] = useState(false);
  
  return (
    <div>
      <header>
        <Navigation
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Navigation>
      </header>
      <main>
        {!resumeSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <Resume></Resume>
        )}
      </main>
    </div>
  );
}

export default App;