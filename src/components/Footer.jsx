import "./components.css"
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';

function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/NoahRaffensparger" target="_blank" rel="noopener noreferrer">
                    <img src={githubImage} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://github.com/NoahRaffensparger" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImage} alt="linkedin" className="social-icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
