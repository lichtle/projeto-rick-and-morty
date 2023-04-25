import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src="src/assets/logo.png" alt="Logo" />
        <span alt="Logo">Characters</span>
      </div>
      <img
        className="rick-and-morty"
        src="src/assets/rick-and-morty-2.png"
        alt="Rick and Morty"
      />
      <div className="links-container">
        <a href="#">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
