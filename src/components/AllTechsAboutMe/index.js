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
import laravelLogo from 'assets/laravel-logo.png';
import livewireLogo from 'assets/livewire-logo.png';
import codeIgniterLogo from 'assets/codeigniter-logo.png';
import jqueryLogo from 'assets/jquery-logo.png';

const AllTechsAboutMe = () => {
  return (
    <div id="container-alltechs-about-me">
        <h3 className="title-section center-title">
            <span className='accent-color-theme'>Linguagens de programação e tecnologias</span> com que já trabalhei
        </h3>
        <div id="am-techs">
            <div className="am-tech">
                <img src={html5Logo} alt="HTML5 logo" title="HTML5 logo"/>
                <div className="bar-style html5-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={css3Logo} alt="CSS3 logo" title="CSS3 logo" />
                <div className="bar-style css3-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={jsLogo} alt="Javascript logo" title="Javascript logo" />
                <div className="bar-style js-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={reactjsLogo} alt="ReactJS logo" title="ReactJS logo" />
                <div className="bar-style reactjs-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={vuejsLogo} alt="Vue.js logo" title="Vue.js logo" />
                <div className="bar-style vuejs-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={nodejsLogo} alt="NodeJS logo" title="NodeJS logo" />
                <div className="bar-style nodejs-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={laravelLogo} alt="Laravel logo" title="Laravel logo" />
                <div className="bar-style laravel-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={livewireLogo} alt="Livewire logo" title="Livewire logo" />
                <div className="bar-style livewire-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={codeIgniterLogo} alt="CodeIgniter logo" title="CodeIgniter logo" />
                <div className="bar-style codeigniter-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={phpLogo} alt="PHP logo" title="PHP logo" />
                <div className="bar-style php-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={flutterLogo} alt="Flutter logo" title="Flutter logo"/>
                <div className="bar-style flutter-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={javaLogo} alt="Java logo" title="Java logo" />
                <div className="bar-style java-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={jqueryLogo} alt="Jquery logo" title="Jquery logo" />
                <div className="bar-style jquery-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={materializeLogo} alt="Materialize logo" title="Materialize logo" />
                <div className="bar-style materialize-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={bulmaLogo} alt="Bulma logo" title="Bulma logo" />
                <div className="bar-style bulma-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={bootstrapLogo} alt="Bootstrap logo" title="Bootstrap logo" />
                <div className="bar-style bootstrap-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={mongodbLogo} alt="MongoDB logo" title="MongoDB logo" />
                <div className="bar-style mongodb-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={sqliteLogo} alt="SQLite logo" title="Sqlite logo" />
                <div className="bar-style sqlite-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={mysqlLogo} alt="MySQL logo" title="MySQL logo" />
                <div className="bar-style mysql-color-bar"></div>
            </div>
            <div className="am-tech">
                <img src={sqlserverLogo} alt="SQL Server logo" title="SQL Server logo" />
                <div className="bar-style sqlserver-color-bar"></div>
            </div>
        </div>
    </div>
  );
}

export default AllTechsAboutMe;