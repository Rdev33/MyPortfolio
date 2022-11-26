import HeaderHomepage from "components/HeaderHomepage";
import MainProjects from "components/MainProjects";
import KnowledgeTechs from "components/KnowledgeTechs";
import SendMail from "components/SendMail";
import FooterRdev from "components/FooterRdev";
import ScrollToTop from "components/ScrollToTop";

const HomePage = () => {
    return(
        <ScrollToTop>
            <HeaderHomepage />
            <MainProjects />
            <KnowledgeTechs />
            <SendMail />
            <FooterRdev />
        </ScrollToTop>
    );
}

export default HomePage