import logoImg from "../assets/logo-main.png";
import { SignInSvg, HomeSvg, CartSvg } from "../assets/SVG";
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
          <div className="nav-icon">
            <HomeSvg />
            <span>Home</span>
          </div>
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
