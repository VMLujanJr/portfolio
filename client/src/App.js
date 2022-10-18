import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Footer from './components/Footer';
import Header from './components/Header';

/* Pages */
import AboutPage from './pages/AboutPage.js';
import FeaturedPage from './pages/FeaturedPage.js';
import IntroPage from './pages/IntroPage.js';
import NoMatchPage from './pages/NoMatchPage.js';

/* Styles */
import './App.css';
import './output.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  return (
    <Router>
      {isLoading ? (
        <IntroPage />
      ) : (
        <div id='main-container'>
          <Header />
          <div id='sub-container'>
            <Routes>
              {/* <Route
              path='/'
              element={ <Intro /> }
            /> */}
              <Route
                path='/'
                element={<AboutPage />}
              />
              <Route
                path='/portfolio'
                element={<FeaturedPage />}
              />
              <Route
                path='*'
                element={<NoMatchPage />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      )
      }
    </Router>
  );
};

export default App;