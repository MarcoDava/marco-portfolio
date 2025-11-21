
import '../App.css';
import Header from '../Components/Header';
import ProjectList from '../Components/ProjectList';
import Footer from '../Components/Footer';
import { Particles } from "@/Components/ui/shadcn-io/particles";

function home() {
  return (
    <div className="flex flex-col items-center h-full w-[100vw] bg-[#1B2631]">
      <Header/>
      <ProjectList/>
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