import { Link } from "react-router";

function Header() {
  return (
    <div className="header-container mt-[2vh]">
      <h3 className="name-header-nav">Marco Dava</h3>
      <div className="nav-link-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/projectpage">Projects</Link>
        <Link className="nav-link" to="/resumepage">Resume</Link>
        <Link className="nav-link" to="/contactpage">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
