import logoImg from "../assets/logo-main.png";
import { SignInSvg, HomeSvg, CartSvg, Contact, About, InstamartSvg } from "../assets/SVG";
import { Link } from "react-router-dom";


const Logo = () => (
  <a href="/">
    <img className="logo" src={logoImg} alt="logo"></img>
  </a>
);

const Header = () => (
  <div className="header">
    <Logo />
    <div className="nav-list-items">
      <ul>
        <li>
          <Link to='/' className="nav-icon">
            <HomeSvg />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to='/instamart' className="nav-icon">
            <InstamartSvg />
            <span>Instamart</span>
          </Link>
        </li>
        <li>
          <Link to='/about' className="nav-icon">
            <About />
            <span>About Us</span>
          </Link>
        </li>
        <li>
          <Link to='/contact' className="nav-icon">
            <Contact />
            <span>Contact Us</span>
          </Link>
        </li>
        <li>
          <div className="nav-icon">
            <SignInSvg />
            <span>Sign In</span>
          </div>
        </li>
        <li>
          <div className="nav-icon">
            <CartSvg />
            <span>Cart</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
