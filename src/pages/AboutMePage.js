import SecondaryHeader from "components/SecondaryHeader";
import InfoAboutMe from "components/InfoAboutMe";
import AllTechsAboutMe from "components/AllTechsAboutMe";
import FooterRdev from "components/FooterRdev";
import ScrollToTop from "components/ScrollToTop";

const AboutMePage = () => {
    return (
        <ScrollToTop>
            <SecondaryHeader titleCurrentPage='Minha História' />
            <InfoAboutMe />
            <AllTechsAboutMe />
            <FooterRdev />
        </ScrollToTop>
    );
}

export default AboutMePage;