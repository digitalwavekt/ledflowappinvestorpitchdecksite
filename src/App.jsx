import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import MissionVision from './components/MissionVision';
import PlatformModules from './components/PlatformModules';
import AIHelps from './components/AIHelps';
import Roadmap from './components/Roadmap';
import Trust from './components/Trust';
import UXDesign from './components/UXDesign';
import Scalability from './components/Scalability';
import BusinessModel from './components/BusinessModel';
import SocialImpact from './components/SocialImpact';
import Investor from './components/Investor';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <MissionVision />
      <PlatformModules />
      <AIHelps />
      <Roadmap />
      <Trust />
      <UXDesign />
      <Scalability />
      <BusinessModel />
      <SocialImpact />
      <Investor />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
