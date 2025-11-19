
import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import ProjectList from './Components/ProjectList';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import { Particles } from "@/Components/ui/shadcn-io/particles";

function App() {
  return (
    <div className="portfolio-container">

      <div className="formatting-div">
      <Header/>
      <Profile/>
      <ProjectList/>
      <Skills/>
      <Footer/>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#FDF4F8"
        size={0.8}
      />
      </div>

    </div>
  );
}

export default App;