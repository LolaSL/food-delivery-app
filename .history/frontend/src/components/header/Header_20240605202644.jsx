import { useState, useRef } from 'react';
import Explore from '../'
import "./Header.css";

const Header = () => {

  const [isClicked, setIsClicked] = useState(false);

  const exploreMenuRef = useRef(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (exploreMenuRef.current) {
      window.scrollTo({
        top: exploreMenuRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
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
      <div ref={exploreMenuRef}>
        <Explore category="All" setCategory={() => {}} />
      </div>
    </div>
  );
};

export default Header;
