import './css/globals.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import ShowProjectPage from "pages/ShowProjectPage";
import AboutMePage from "pages/AboutMePage";
import ListAllProjectsPage from "pages/ListAllProjectsPage";
import SideMenu from "components/SideMenu";
import PageNotFound from "components/PageNotFound";

function App() {
  return (
    <Router>
        <SideMenu />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/projects" element={<ListAllProjectsPage />} />
            <Route exact path="/projects/:project" element={<ShowProjectPage />} />
            <Route exact path="/about-me" element={<AboutMePage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
