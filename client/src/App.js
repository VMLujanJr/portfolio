import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Footer from './components/Footer';
import Header from './components/Header';

/* Pages */
import About from './pages/About.js';
import Featured from './pages/Featured.js';
import Intro from './pages/Intro.js';
import NoMatch from './pages/NoMatch.js';

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
        <Intro />
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
                path='/about'
                element={<About />}
              />
              <Route
                path='/featured'
                element={<Featured />}
              />
              <Route
                path='*'
                element={<NoMatch />}
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