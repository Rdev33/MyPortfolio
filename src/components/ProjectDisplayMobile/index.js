import './style.css';

const ProjectDisplayMobile = ({presentationText, videoIDYoutube}) => {
    return (
        <div id='project-display-mobile'>
            {presentationText}
            <div id="display-video-mobile">
                <iframe src={"https://www.youtube.com/embed/" + videoIDYoutube + "?controls=1&modestbranding=1&fs=1&autoplay=1&loop=1"}
                        title="YouTube video player" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default ProjectDisplayMobile;