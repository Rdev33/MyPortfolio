import './style.css';
import AppleComputerImg from 'assets/apple-computer.png';
import ProjectDisplayWeb from 'components/ProjectDisplayWeb';
import ProjectDisplayMobile from 'components/ProjectDisplayMobile';

const DetailsProject = ({project}) => {
    const projectDisplayComponent = (project.type == 'App para android') ?
        <ProjectDisplayMobile presentationText={project.presentationText} videoIDYoutube={project.videoIDYoutube} /> :
        <ProjectDisplayWeb presentationText={project.presentationText} videoIDYoutube={project.videoIDYoutube} />;

    return (
        <div id='container-details-project'>
            <div id='project-features'>
                <div className='feature'>
                    <h4>Tipo do projeto</h4>
                    <p>- {project.type}</p>
                </div>
                <div className='feature'>
                    <h4>Tecnologias usadas</h4>
                    {project.technologiesUsed.map((tech, index) => <p key={index}>- {tech}</p>)}
                </div>
                <div className='feature'>
                    <h4>Ano de criação</h4>
                    <p>- {project.year}</p>
                </div>
                {project.active &&
                    <div className='feature'>
                        <h4>Disponibilidade</h4>
                        <p><a target='_blank' href={project.accessLink}>{project.accessLink}</a></p>
                    </div>
                }
            </div>
            {projectDisplayComponent}
            {/* for the flex layout */}
            <div></div>
        </div>
    );
}

export default DetailsProject;