import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const SideMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    let statusMenu = (isVisible) ? 'opened' : 'closed';
    const navigate = useNavigate();

    const navigateTo = (route) => {
        // Close menu aways that navigate
        setIsVisible(false);

        navigate(route);
    }

    return (
        <>
            <div onClick={() => setIsVisible(!isVisible)} className="toggle-menu">
                {
                (isVisible) ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                }
            </div>
            <div className={"container-menu " + statusMenu}>
                <ul id="links-navigation">
                    <li onClick={() => navigateTo('/')}>Voltar ao início</li>
                    <li onClick={() => navigateTo('/about-me')}>Sobre mim</li>
                    <li onClick={() => navigateTo('/projects')}>Meus projetos</li>
                </ul>
            </div>
        </>
    )
}

export default SideMenu;