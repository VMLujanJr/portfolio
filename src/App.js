import React, { useState, useEffect } from 'react';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
/* import Hero from './components/Hero'; */
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import './App.css';
import './output.css';
import TechnologyList from './components/TechnologyList';

const App = () => {
  const [isAboutSelected, setAboutSelected] = useState(true);
  const [isPortfolioSelected, setPortfolioSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  return (
    <div className='font-League inline'>
      {isLoading ? (
        <Intro></Intro>
      ) : (
        <div className='w-full'>
          <Navigation
            isAboutSelected={isAboutSelected}
            setAboutSelected={setAboutSelected}
            isPortfolioSelected={isPortfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
          ></Navigation>
          <main className='divide-y divide-dashed'>
            {isAboutSelected ? (
              <>
                <About></About>
                <TechnologyList></TechnologyList>
              </>
            ) : isPortfolioSelected ? (
              <Featured className='z-0'></Featured>
            ) : (
              <p>404 Page Not Found</p>
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