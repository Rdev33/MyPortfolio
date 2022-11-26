import SecondaryHeader from "components/SecondaryHeader";
import FooterRdev from "components/FooterRdev";
import ShowAllProjects from "components/ShowAllProjects";
import ScrollToTop from "components/ScrollToTop";

const ListAllProjectsPage = () => {
    return (
        <ScrollToTop>
            <SecondaryHeader titleCurrentPage='Projetos que saíram da minha mente' />
            <ShowAllProjects />
            <FooterRdev />
        </ScrollToTop>
    );
}

export default ListAllProjectsPage;