import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">⚡ <span>AutoFlow</span></Link>
      </div>

      <nav className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/integrations">Integrations</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/docs">Docs</Link>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="signin">Sign In</Link>
        <Link to="/signup" className="btn-primary small">Get Started</Link>
      </div>
    </header>
  );
};

export default Navbar;
