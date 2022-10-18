import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import './App.css';
import './output.css';
import TechnologyList from './components/TechnologyList';

const App = () => {
    const [isAboutSelected, setAboutSelected] = useState(true);
    const [isPortfolioSelected, setPortfolioSelected] = useState(false);
    const [isMenuSelected, setMenuSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2250)
    }, []);

    // return (
    //   <Header />
    //   <Main>
    //   </Main>
    //   <Footer />
    // )

    return (
        <div className='font-Cutive inline'>
            {isLoading ? (
                <Intro></Intro>
            ) : (
                <div className='w-full'>
                    {/* <Navigation
            isAboutSelected={isAboutSelected}
            setAboutSelected={setAboutSelected}
            isPortfolioSelected={isPortfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
          >
          </Navigation> */}
                    {/* <Menu
            isAboutSelected={isAboutSelected}
            setAboutSelected={setAboutSelected}
            isPortfolioSelected={isPortfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            isMenuSelected={isMenuSelected}
            setMenuSelected={setMenuSelected}
          ></Menu> */}
                    <Header></Header>
                    <main className='divide-y-8 divide-solid'>
                        {isAboutSelected ? (
                            <>
                                <Hero></Hero>
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
            )
            }
        </div >
    );
};

export default App;