import React, { useState, useEffect } from 'react';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
/* import Hero from './components/Hero'; */
import Intro from './components/Intro';
import Nav from './components/Nav';
// import logo from './assets/images/banner.gif';
import './App.css';
import './output.css';
import { useTimeoutFn } from 'react-use';
import { Transition } from '@headlessui/react';
import TechnologyList from './components/TechnologyList';

const App = () => {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuActive, setIsMenuActive] = useState(true);
  /*  const [,,resetIsShowing] = useTimeoutFn(() => setIsLoading(true), 50) */

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  return (
    <div className='font-League inline'>
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
        <div className='w-full'>
          <Nav
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            portfolioSelected={portfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
          ></Nav>
          {/* <Navigation
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            portfolioSelected={portfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
          ></Navigation> */}
          <main className='divide-y divide-dashed'>
            {aboutSelected ? (
              <>
                <About></About>
                <TechnologyList></TechnologyList>
              </>
            ) : (
              <Featured
                className='z-0'
              ></Featured>
            )
            }
          </main>
          <Footer
            className='z-10'
          ></Footer>
        </div>
      )}
    </div>
  );
};

export default App;