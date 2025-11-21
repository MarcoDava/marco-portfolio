
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Particles } from "@/Components/ui/shadcn-io/particles";
import ResumeEmbed from '../Components/ResumeEmbed';

function resumepage() {
  return (
    <div className="portfolio-container">
      <Header/>
      <ResumeEmbed/>
      <Footer/>
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={200}
        staticity={5}
        color="#FDF4F8"
        size={0.8}
      />
    </div>
  );
}

export default resumepage;