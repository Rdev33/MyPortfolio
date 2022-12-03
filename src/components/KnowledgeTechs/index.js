import './style.css';
import { Link } from 'react-router-dom';
import jsLogo from 'assets/js-logo.png';
import reactjsLogo from 'assets/react-js-logo.png';
import nodejsLogo from 'assets/node-js-logo.png';

const KnowledgeTechs = () => {
  return (
    <div id="container-knowledge-techs">
        <h2 className="title-section">Conhecimento nas techs...</h2>
        <div id="techs">
            <div className="tech">
                <img src={jsLogo} />
                <div className="yellow-bar"></div>
            </div>
            <div className="tech">
                <img src={reactjsLogo} />
                <div className="lightblue-bar"></div>
            </div>
            <div className="tech">
                <img src={nodejsLogo} />
                <div className="green-bar"></div>
            </div>
            <div className="number-info">
                <h2>+ 17</h2>
            </div>
        </div>
        <div id="link-for-more">
            <p>Outras tecnologias/linguagens de programação</p>
            <Link to="/about-me">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </Link>
        </div>
    </div>
  );
}

export default KnowledgeTechs;
