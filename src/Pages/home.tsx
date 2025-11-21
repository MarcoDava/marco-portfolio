
import '../App.css';
import Header from '../Components/Header';
import Profile from '../Components/Profile';
import SkillsList from '../Components/SkillsList';
import Footer from '../Components/Footer';
import { Particles } from "@/Components/ui/shadcn-io/particles";

function home() {
  return (
    <div className="home-container">
      <Header/>
      <Profile/>
      <SkillsList/>
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

export default home;