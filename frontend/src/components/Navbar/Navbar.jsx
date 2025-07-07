import { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import PropTypes from 'prop-types';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="logo" /></Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href="#app-download" onClick={() => setMenu("mob-app")} className={menu === "mob-app" ? "active" : ""}>mobile app</a>
        <a href="#footer" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <Link to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart" />
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </Link>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="profile" />
            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="orders" /> <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logout" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// ✅ PropTypes Validation
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
