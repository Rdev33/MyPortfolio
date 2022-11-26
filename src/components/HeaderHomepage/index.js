import './style.css';
import printMainScreenApp from 'assets/main-screen-app-OFICIAL.png';
import printSecondScreenApp from 'assets/second-screnn-app-OFICIAL.png';
import logo from 'assets/logo-RDeveloper.png';
import { Link } from 'react-router-dom';

const HeaderHomepage = () => {
    return(
        <div id='container-header'>
            {/* Contents absolutes/fixed */}
            <div id="text-name-with-effect">
                <h2>Raphael Silva</h2>
            </div>

            {/* Contents inside the flex display */}
            <div id="logo-and-introText">
                <div className="logo">
                    <Link to='/' ><img src={logo} width="90"/></Link>
                </div>
                <div id="intro-text">
                    <h1>Olá, sou um<br />
                        Fullstack Developer</h1>
                    <p>Há aqueles que dizem que desenvolver é uma prática muito difícil, mas para
                        mim não... levo numa boa e é divertido cada minuto em que trabalho. É sério!
                        É incrível criar, dar vida a uma coisa que sai da sua mente e que acaba
                        parando em uma tela de computador ou celular.</p>
                    <p>
                        <Link to="/projects">Veja meus projetos</Link>
                        &nbsp;
                        <Link to="/projects">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>
                        </Link>
                        &nbsp;
                        &nbsp;
                        <span>ou</span>
                        &nbsp;
                        &nbsp;
                        <Link to="/about-me">Me conheça melhor</Link>
                        &nbsp;
                        <Link to="/about-me">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Link>
                    </p>
                </div>
            </div>
            <div id="backImage-and-printApp">
                <img src={printMainScreenApp} />
                <img src={printSecondScreenApp} />
            </div>
        </div>
    );
}

export default HeaderHomepage;