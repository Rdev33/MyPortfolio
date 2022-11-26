import './style.css';
import jsLogo from 'assets/js-logo.png';
import reactjsLogo from 'assets/react-js-logo.png';
import nodejsLogo from 'assets/node-js-logo.png';
import html5Logo from 'assets/html5-logo.png';
import css3Logo from 'assets/css3-logo.png';
import phpLogo from 'assets/php-logo.png';
import flutterLogo from 'assets/flutter-logo.png';
import javaLogo from 'assets/java-logo.png';
import materializeLogo from 'assets/materialize-logo.png';
import bulmaLogo from 'assets/bulma-logo.png';
import bootstrapLogo from 'assets/bootstrap-logo.png';
import vuejsLogo from 'assets/vuejs-logo.png';
import mongodbLogo from 'assets/mongo-db-logo.png';
import sqliteLogo from 'assets/sqlite-logo.png';
import mysqlLogo from 'assets/mysql-logo.png';
import sqlserverLogo from 'assets/sqlserver-logo.png';

const AllTechsAboutMe = () => {
  return (
    <div id="container-alltechs-about-me">
        <h3 className="title-section center-title">
            <span className='accent-color-theme'>Linguagens de programação e tecnologias</span> com que já trabalhei
        </h3>
        <div id="am-techs">
            <div className="am-tech">
                <img src={html5Logo} />
                <div className="html5-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={css3Logo} />
                <div className="css3-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={jsLogo} />
                <div className="js-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={reactjsLogo} />
                <div className="reactjs-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={vuejsLogo} />
                <div className="vuejs-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={nodejsLogo} />
                <div className="nodejs-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={phpLogo} />
                <div className="php-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={flutterLogo} />
                <div className="flutter-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={javaLogo} />
                <div className="java-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={materializeLogo} />
                <div className="materialize-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={bulmaLogo} />
                <div className="bulma-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={bootstrapLogo} />
                <div className="bootstrap-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={mongodbLogo} />
                <div className="mongodb-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={sqliteLogo} />
                <div className="sqlite-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={mysqlLogo} />
                <div className="mysql-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={sqlserverLogo} />
                <div className="sqlserver-color-bar"></div>
            </div>
        </div>
    </div>
  );
}

export default AllTechsAboutMe;