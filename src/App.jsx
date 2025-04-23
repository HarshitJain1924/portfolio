import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import Resume from "./sections/Resume"; // Import the Resume component
import AboutMe from "./sections/AboutMe";
import Hackathons from "./sections/Hackathons";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <AboutMe />
    <ShowcaseSection />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Hackathons />
    <Resume/>
    <Contact />
    <Footer />
  </>
);

export default App;
