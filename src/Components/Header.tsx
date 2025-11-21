import { Link } from "react-router";

function Header() {
  return (
    <div className="header-container mt-[2vh]">
      <h3 className="name-header-nav flex-[0.5]">Marco Dava</h3>
      <div className="nav-link-container">
        <Link className="nav-link text-[#A5C8D6]" to="/">Home</Link>
        <Link className="nav-link text-[#A5C8D6]" to="/projectpage">Projects</Link>
        <Link className="nav-link text-[#A5C8D6]" to="/resumepage">Resume</Link>
        <Link className="nav-link text-[#A5C8D6]" to="/contactpage">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
