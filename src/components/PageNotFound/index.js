import './style.css';
import svg404 from 'assets/404-not-found.svg';

const PageNotFound = () => {
    return (
        <div id="container-404">
            <div id="alert-and-imageSvg">
                <div id="content-alert">
                    <h2>Você acessou uma rota inexistente!</h2>
                    <p>Mas tudo bem, nem tudo está perdido. Para navegar no meu site, você pode estar acessando os links
                        oficiais através do menu que será aberto ao clicar no botão superior direito da tela.</p>
                </div>
                <div id="image-404">
                    <img src={svg404} />
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;