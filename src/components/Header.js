import logoImg from "../../logo.png";
const Logo = () => (
    <a href="/">
      <img className="logo" src={logoImg} alt="logo"></img>
    </a>
  );
  
  const Header = () => (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );

  export default Header;