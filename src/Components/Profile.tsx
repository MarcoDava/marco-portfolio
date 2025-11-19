
function Profile() {
  return (
    <div className="profile-container min-h-screen">
      <div className="summary-container">
        <div className="profile-desc">
          <div className="intro-text-container">
            <h3 className="intro-header">Hello, my name is</h3>
            <h1 className="name-header">Marco Dava</h1>
          </div>
          <p className="profile-paragraph">
              A self taught machine learning engineering student that strives to solve everyday problems, specialized in reinforced learning models.
          </p>
          <div className="icon-container">
              <a href="https://drive.google.com/file/d/1I0EIPmfm525Ec2eEeG5MQetQ3cySBszi/view?usp=sharing" className="resume-button">
                <span>Resume</span>
              </a>
              <a href="https://github.com/MarcoDava"><img className="profile-icon" src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="GitHub Icon"></img></a>
              <a href="https://www.linkedin.com/in/marcodava/"><img className="profile-icon"  src="https://img.icons8.com/ios11/512/FFFFFF/linkedin.png" alt="LinkedIn Icon"></img></a>
              <a href="mailto:marco.a.dava@gmail.com"><img className="profile-icon" src="https://img.icons8.com/ios_filled/512/FFFFFF/gmail-new.png" alt="Gmail Icon"></img></a>
          </div>
        </div>
        <div className="image-container">
          <img className="profile-image" src="https://MarcoDava.github.io/marco-portfolio/images/MarcoProfilePic.jpg" alt="profile-pic"></img>
        </div>
      </div>
      <div className="aboutme-container">
        <h2 className="aboutme-header">ABOUT ME</h2>
        <p className="aboutme-section">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
        </p>
      </div>
        <div className="w-full flex justify-center items-center mt-[10vh] mb-[3vh]">
          <img className="h-10 w-10 flex items-center justify-center" src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt="Arrow Bottom"/>
        </div>
    </div>
  );
}

export default Profile;