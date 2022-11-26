import './style.css';
import { Link } from "react-router-dom";
import brainImage from 'assets/brain-image-small.png';
import projects from 'data/projects';

const ShowAllProjects = () => {
    return (
        <div id='container-show-all-projects'>
            <div id='display-img-brain'>
                <img src={brainImage} />
            </div>
            <div id='all-projects'>
                {projects.map((project, index) => {
                    return (
                        <div className='project-info' key={index}>
                            <div className="thumb">
                                <img src={project.imageURL} alt={"Print projeto: " + project.name} />
                            </div>
                            <div className="details">
                                <p>{project.name}</p>
                                <Link to={"/projects/" + project.name} title="Visualizar mais informações">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ShowAllProjects;