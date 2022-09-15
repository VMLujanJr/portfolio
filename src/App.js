import React, { useState } from 'react';
/* import About from './components/About'; */
import Intro from './components/Intro';
import Navigation from './components/Navigation';
// import Projects from './components/Projects';
import Resume from './components/Resume';
// import logo from './assets/images/banner.gif';
import './App.css';
import './output.css';
import Projects from './components/Projects';

function App() {
  const [resumeSelected, setResumeSelected] = useState(false);
  const [introRender, setIntroRender] = useState(false);

  return (
    <div>
      {!introRender ? (
        <main>
        <Navigation
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Navigation>
        {!resumeSelected ? (
          <>
            <Projects></Projects>
          </>
        ) : (
          <Resume></Resume>
        )}
      </main>
      ) : (
        <Intro></Intro>
      )}
    </div>
  );
};

export default App;