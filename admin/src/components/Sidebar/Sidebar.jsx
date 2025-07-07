
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink
          to="/add"
          end
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.addIcon} alt="Add Icon" />
          <p>Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          end
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.orderIcon} alt="List Icon" />
          <p>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          end
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.orderIcon} alt="Orders Icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
