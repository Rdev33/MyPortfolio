import { useParams } from 'react-router-dom';
import SecondaryHeader from "components/SecondaryHeader";
import DetailsProject from "components/DetailsProject";
import FooterRdev from "components/FooterRdev";
import ScrollToTop from "components/ScrollToTop";
import PageNotFound from "components/PageNotFound";
import projects from "data/projects";

const ShowProjectPage = () => {
    // Search by project. When it doesn't exist, redirect to the 404 page
    const { project: projectNameParam } = useParams();
    const detailsProject = projects.find(item => item.name === projectNameParam);

    if(!detailsProject){
        return <PageNotFound />
    }

    return (
        <ScrollToTop>
            <SecondaryHeader titleCurrentPage={detailsProject.name} />
            <DetailsProject project={detailsProject} />
            <FooterRdev />
        </ScrollToTop>
    );
}

export default ShowProjectPage;