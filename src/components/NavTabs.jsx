import { Link, useLocation } from 'react-router-dom';
import "./components.css"

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <div class="d-flex justify-content-between parent">
        <div>
          <h2 class="title">Noah Raffensparger</h2>
        </div>
        <div className="d-flex">
          <a className="nav-item navbar-item">
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </a>
          <a className="nav-item navbar-item">
            <Link
              to="/About"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </a>
          <a className="nav-item navbar-item">
            <Link
              to="/Contact"
              // Check to see if the currentPage is `contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </a>
          <a className="nav-item navbar-item">
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
