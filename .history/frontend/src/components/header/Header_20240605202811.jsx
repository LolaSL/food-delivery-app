import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsClicked(!isClicked);
    navigate('/#explore-menu');
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
      </div>
    </div>
  );
};

export default Header;
