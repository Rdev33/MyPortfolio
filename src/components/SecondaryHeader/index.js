import './style.css';
import { Link, useParams } from 'react-router-dom';
import logo from 'assets/logo-RDeveloper.png';

const SecondaryHeader = ({titleCurrentPage}) => {
    const param = useParams();

    return (
        <header>
            <div className='secondary-logo'>
                <Link to='/' ><img src={logo} width="90"/></Link>
            </div>
            <div id='title-current-page'>
                <h2>
                    {/* useful check for when it's a demo page of a project */}
                    {
                        (param.project) &&
                        <span><Link to="/projects">Projetos</Link>&nbsp;>&nbsp;</span>
                    }
                    {titleCurrentPage}
                </h2>
            </div>
            {/* for flexbox "space between" configuration */}
            <div></div>
        </header>
    );
}

export default SecondaryHeader;