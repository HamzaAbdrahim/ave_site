import { NavLink } from 'react-router-dom';
import './header.css'
import headerNavLinks from '../../../data/headerNavLinks';

const Header = () => {
  return (
    <header className="d-grid py-3">
      <div className="flex-items container-lg">
        <nav className="flex-items flex-1">
          <a href="#" className="website-logo">
            <img src="./public/icon.png" alt="" />
          </a>
          <ul id="navlinsk" className="flex-items navlinsk" style={{ gap: 'clamp(30px ,5vw , 58px)' }}>
            <a href="#" className="d-lg-none position-absolute left-50 translate-middle-x" style={{ top: '4rem' }}>
              <img src="./public/icon.png" alt="" />
            </a>
            {headerNavLinks.map((navlink, index) => (
            <NavLink className="navlink" key={index} to={navlink.href}>
            {navlink.title}
            </NavLink>
            ))}
            <div className="d-grid d-lg-none text-center" style={{ gap: 'clamp(10px ,5vw , 20px)' }}>
              <a href="#" className="navbar-link">S’inscrire</a>
              <button id="connecter-button" className="outline-button">Se connecter</button>
            </div>
          </ul>
        </nav>
        <div className="d-none d-lg-flex align-items-center" style={{ gap: 'clamp(30px ,5vw , 45px)' }}>
          <a href="#" id="inscrire-link" className="navbar-link">S’inscrire</a>
          <button id="connecter-button" className="outline-button">Se connecter</button>
        </div>
        <button id="menu-button" className="mobil-menu d-lg-none">
          <i className="bi bi-list"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;