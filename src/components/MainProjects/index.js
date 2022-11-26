import './style.css';
import { Link } from 'react-router-dom';
import AppleComputerImg from 'assets/apple-computer.png';
import projects from "data/projects";

const MainProjects = () => {
  return (
    <div id="container-main-projects">
        <h2 className="title-section">Projetos concluídos</h2>
        <div id="main-projects">
            {/* get only customers: "Gondolas osasco" and "GR Alpha Express" */}
            <div className="project">
                <h4>{projects[0].year}</h4>
                <h3>{projects[0].name}</h3>
                <div className="print-project">
                    <img className="project-img" src={projects[0].imageURL} />
                    <img className="computer-image" src={AppleComputerImg} />
                </div>
                <Link to={"/projects/" + projects[0].name} title="Visualizar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </Link>
            </div>
            <div className="project">
                <h4>{projects[3].year}</h4>
                <h3>{projects[3].name}</h3>
                <div className="print-project">
                    <img className="project-img" src={projects[3].imageURL} />
                    <img className="computer-image" src={AppleComputerImg} />
                </div>
                <Link to={"/projects/" + projects[3].name} title="Visualizar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </Link>
            </div>
            <div id="more-projects">
                <h3>Veja mais</h3>
                <Link to="/projects">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default MainProjects;