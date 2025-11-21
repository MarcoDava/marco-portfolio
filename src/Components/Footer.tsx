
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container w-full py-6 bg-[#0b1216] p-[4vh]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 ">
        <div className="text-[#A5C8D6] text-sm">© {year} Marco Dava. All rights reserved.</div>

        <nav aria-label="Contact and social links">
          <ul className="flex items-center gap-4">
            <li>
              <a href="mailto:marco.a.dava@gmail.com" aria-label="Email Marco" className="hover:opacity-80">
                <img src="https://img.icons8.com/ios_filled/512/FFFFFF/gmail-new.png" alt="Email" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://github.com/MarcoDava" target="_blank" rel="noopener noreferrer" aria-label="Marco on GitHub" className="hover:opacity-80">
                <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="GitHub" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marcodava/" target="_blank" rel="noopener noreferrer" aria-label="Marco on LinkedIn" className="hover:opacity-80">
                <img src="https://img.icons8.com/ios11/512/FFFFFF/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
