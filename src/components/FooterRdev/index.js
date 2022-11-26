import './style.css';
import linkedinIcon from 'assets/linkedin-icon.png';
import whatsappIcon from 'assets/whatsapp-icon.png';
import logo from 'assets/logo-RDeveloper.png';

const FooterRdev = () => {
  return (
    <div>
        <footer>
            <img src={logo} width="50" />
            <div id="socials-network">
                <a href="https://www.linkedin.com/in/raphael-vin%C3%ADcius-a98818205/">
                    <img src={linkedinIcon}/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5511982877706">
                    <img src={whatsappIcon}/>
                </a>
            </div>
        </footer>
    </div>
  );
}

export default FooterRdev;
