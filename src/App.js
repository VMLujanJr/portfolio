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
import { useTimeoutFn } from 'react-use';
import { Transition } from '@headlessui/react';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
 /*  const [,,resetIsShowing] = useTimeoutFn(() => setIsLoading(true), 50) */

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  return (
    <div>
      {isLoading ? (
        /*{ <Transition
          show={isLoading}
          enter="transition-opacity ease-in-out duration-50"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        > }*/
          <Intro></Intro>
       /*  </Transition> */

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
          ) : (
            <Portfolio></Portfolio>
          )
        }
        </main>
      )}
    </div>
  );
};

export default App;