import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.bcetLogo} alt="BCET Logo" />
      <img className="profile" src={assets.profileImage} alt="Profile" />
    </div>
  );
};

export default Navbar;
