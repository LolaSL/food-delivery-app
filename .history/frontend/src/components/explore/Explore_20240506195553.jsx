import React from 'react'; // Import React
import PropTypes from 'prop-types';
import './Explore.css';
import { menu_list } from '../../assets/assets.js';

const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable list of dishes, ranging
        from savory delights like truffle-infused risotto to sweet indulgences
        such as Butterscotch Cake.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
            key={index}
            className="explore-menu-list-item"
          >
            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

Explore.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired, // Update prop type to function
};

export default Explore;

