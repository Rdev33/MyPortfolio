import './style.css';
import mailSvg from 'assets/undraw_mail.svg';

const SendMail = () => {
  return (
    <div id="container-send-mail">
        <div id="action-send">
            <h2>Eai, vamos trocar uns emails? ;)</h2>
            <a href="mailto:raphael.vn33@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </a>
            <div id="mail-description">
                <p>*Me envie um email clicando no ícone acima</p>
            </div>
        </div>
        <div id="mail-svg">
            <img src={mailSvg} />
        </div>
    </div>
  );
}

export default SendMail;