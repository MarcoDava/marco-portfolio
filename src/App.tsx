
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import ContactPage from './Pages/contactpage';
import ResumePage from './Pages/resumepage';
import ProjectPage from './Pages/projectpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projectpage" element={<ProjectPage/>}/>
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/resumepage" element={<ResumePage/>}/> 
      </Routes>
    </Router>
  );
}

export default App;