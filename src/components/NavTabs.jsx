import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./components.css"
import TypingEffect from './hooks.jsx';

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isResumeVisible, setIsResumeVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHomeVisible(true);
      console.log(222)
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAboutVisible(true);
      console.log(222)
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContactVisible(true);
      console.log(222)
    }, 4600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsResumeVisible(true);
      console.log(222)
    }, 5400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <div className="d-flex parent justify-content-between">
        <TypingEffect />
        <div className="d-flex">
          <a className={`nav-item navbar-item home-link ${isHomeVisible ? 'visible' : ''}`} >
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </a>
          <a className={`nav-item navbar-item about-link ${isAboutVisible ? 'visible' : ''}`} >
            <Link
              to="/About"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </a>
          <a className={`nav-item navbar-item contact-link ${isContactVisible ? 'visible' : ''}`} >
            <Link
              to="/Contact"
              // Check to see if the currentPage is `contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </a>
          <a className={`nav-item navbar-item resume-link ${isResumeVisible ? 'visible' : ''}`} >
            <Link
              to="/Resume"
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavTabs;
