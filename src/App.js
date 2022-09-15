import React, { useState } from 'react';
import About from './components/About';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
// import Projects from './components/Projects';
import Resume from './components/Resume';
// import logo from './assets/images/banner.gif';
import './App.css';
import './output.css';
import Projects from './components/Projects';

function App() {
  const [introRender, setIntroRender] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  
  return (
    <div>
      {!introRender ? (
        <main>
        <Navigation
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Navigation>
        {!resumeSelected ? (
          <>
            <About></About>
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