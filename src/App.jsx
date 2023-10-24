import Navbar from "./components/Navbar/NavBar";
import Introduction from "./components/Introduction/Introduction";
import Aboutme from "./components/AboutMe/Aboutme";
import SkillCards from "./components/SkillCards/SkillCards";
import RecentWorks from "./components/Recentworks/RecentWorks";
import Collaboration from "./components/Collaboration/Collaboration";
import StartupProjects from "./components/StartupProjects/StartupProjects";
import Partnership from "./components/Partnership/Partnership";
import Testimonials from "./components/Testimonials/Testimonials";
import MeetUp from "./components/MeetUp/MeetUp";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Home>
        <Navbar />
        <Introduction />
        <Aboutme />
        <SkillCards />
        <RecentWorks />
        <hr />
        <Collaboration />
        <StartupProjects />
        <Partnership />
        <hr />
        <Testimonials />
        <MeetUp />
        <Footer />
      </Home>
    </div>
  );
}
const Home = styled.div`
  margin-top: 1%;
`;

export default App;
