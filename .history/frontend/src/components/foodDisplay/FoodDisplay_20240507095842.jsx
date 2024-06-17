
import PropTypes from 'prop-types'; // Import PropTypes separately
import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../foodItem/FoodItem';

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div>
      <h2 className="food-display" id="food-display">
        Top dishes near you
      </h2>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          <FoodItem
            
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

FoodDisplay.propTypes = {
    category: PropTypes.string.isRequired,

}
