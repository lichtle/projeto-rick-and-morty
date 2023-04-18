import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src="src/assets/logo.png" alt="Logo" />
        <span alt="Logo">Characters</span>
      </div>
      <div className="links-container">
        <a href="#">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
