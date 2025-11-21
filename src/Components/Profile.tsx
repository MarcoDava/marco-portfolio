import {Link } from 'react-router-dom';


function Profile() {
  return (
    <div className="profile-container flex flex-col justify-center items-center  mt-[9vh]">
      <div className="summary-container max-w-[60vw]">
        <div className="profile-desc">
          <div className="intro-text-container">
            <h3 className="intro-header">Hello, my name is</h3>
            <h1 className="name-header">Marco Dava</h1>
          </div>
          <p className="profile-paragraph">
              A self taught machine learning engineering student that strives to solve everyday problems, specialized in reinforced learning models.
          </p>
          <div className="icon-container">
              <Link to="/resumepage" className="resume-button max-w-[100px] flex justify-center items-center text-[1rem]">
                Resume
              </Link>
              <a className="w-[30px] aspect-square" href="https://github.com/MarcoDava"><img className="profile-icon" src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="GitHub Icon"></img></a>
              <a className="w-[30px] aspect-square" href="https://www.linkedin.com/in/marcodava/"><img className="profile-icon"  src="https://img.icons8.com/ios11/512/FFFFFF/linkedin.png" alt="LinkedIn Icon"></img></a>
              <a className="w-[30px] aspect-square" href="mailto:marco.a.dava@gmail.com"><img className="profile-icon" src="https://img.icons8.com/ios_filled/512/FFFFFF/gmail-new.png" alt="Gmail Icon"></img></a>
          </div>
        </div>
        <div className="image-container min-w-[100px]">
          <img className="profile-image" src="https://MarcoDava.github.io/marco-portfolio/images/MarcoProfilePic.jpg" alt="profile-pic"></img>
        </div>
      </div>
      <div className="aboutme-container max-w-[60vw]">
        <h2 className="aboutme-header">ABOUT ME</h2>
        <p className="aboutme-section">
            I’m a software engineering student and team lead who’s passionate about building high-impact applications. I’ve led a team of developers to ship full-stack products, architected backend systems, and deployed scalable services using modern frameworks and cloud tools. My projects focus on reliability, usability, and clean engineering principles. I thrive in collaborative environments and enjoy turning complex problems into elegant, functional solutions.
        </p>
      </div>
      <div className="w-[100vw] flex justify-center items-center mt-[15vh] w-[100%] bg-gradient-to-t from-[#2C3E50] to-[#1B2631]">
        <a href="#project-section"><img className="h-10 w-10 flex items-center justify-center" src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt="Arrow Bottom"/></a>
      </div>

    </div>
  );
}

export default Profile;