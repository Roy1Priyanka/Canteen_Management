import { useContext } from 'react';
import PropTypes from 'prop-types';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  const handleCategoryClick = (menuName) => {
    setCategory((prev) => (prev === menuName ? 'All' : menuName));
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to
        satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() => handleCategoryClick(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? 'active' : ''}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

// ✅ Add prop type validation
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;
