import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setIsClicked(!isClicked);
    history.push('/explore-menu')
  };
  
  return (
    <div className="header-container">
      <div className="header-content">
        <h3>Order your favorite food here</h3>
        <p>
          Explore our diverse menu, which includes a variety of dishes
          meticulously crafted with the finest ingredients. Elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button  className={`color-change-button ${isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
