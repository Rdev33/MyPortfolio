import './style.css';
import profileSvg from 'assets/undraw_profile.svg';

const InfoAboutMe = () => {
  return (
    <div id="container-about-me">
        <div id="about-me-svg">
            <img src={profileSvg} />
        </div>
        <div id="text-about-me">
            <h2>Quando trabalhamos no que amamos,
                o que produzimos fica INCRÍVEL!</h2>
            <p>
                Apaixonado desde criança pela área de TI, quando alcancei uma certa idade, já estava decidido e procurei
                me profissionalizar no ramo. No começo eu queria ser um administrador de redes, mas quando tive o primeiro
                contato com programação no curso técnico que eu fazia, fiquei encantado. Após esse momento, mudei a direção do
                meu objetivo. Ainda bem que foi a mudança certa(área muito boa né rs).
                <br /><br />
                Eu atuo como Dev desde o ano de 2013. Comecei devagarzinho fazendo pequenas alterações de projetos
                que um colega me passava, e um tempo depois decidi seguir meu próprio caminho como autônomo.
                <br /><br />
                Percorri uma enorme jornada, enfrentando diversos desafios. Através deles eu tive um salto muito grande
                como Dev. Sempre estive aprendendo coisas novas e me dedicando para entregar aos clientes, coisas fantásticas.
                <br /><br />
                Hoje em dia, depois de tudo, analisando minhas habilidades de soft e hard skills, posso dizer que sou um profissional bem completo. E
                é muito gratificante poder dizer isso, pois foi necessário eu dar muito de mim para chegar aonde cheguei.
                <br /><br />
                Então é isso aí... Já que você leu até aqui, aproveita e dá uma olhada o tanto de coisa que já passou pela minha cabeça.
            </p>
        </div>
    </div>
  );
}

export default InfoAboutMe;
