import React, { useState, useEffect } from 'react';
import About from './components/About';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
// import Projects from './components/Projects';
import Resume from './components/Resume';
// import logo from './assets/images/banner.gif';
import './App.css';
import './output.css';
import Portfolio from './components/Portfolio';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, []);

  return (
    <div>
      {loading ? (
        <Intro></Intro>
      ) : (
        <main>
          <Navigation
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            portfolioSelected={portfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
          ></Navigation>
          {aboutSelected ? (
            <About></About>
          ) : portfolioSelected ? (
            <Portfolio></Portfolio>
          ) : (
            <Resume></Resume>
          )}
        </main>
      )}
    </div>
  );
};

export default App;