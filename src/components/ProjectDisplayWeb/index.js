import './style.css';
import AppleComputerImg from 'assets/apple-computer.png';

const ProjectDisplayWeb = ({presentationText, videoIDYoutube}) => {
    return (
        <div id='project-display-web'>
            {presentationText}
            <div id='display-video-web'>
                <img src={AppleComputerImg} alt=""/>
                <iframe src={"https://www.youtube.com/embed/" + videoIDYoutube + "?controls=1&modestbranding=1&fs=1&autoplay=1&loop=1"}
                        title="YouTube video player" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default ProjectDisplayWeb;