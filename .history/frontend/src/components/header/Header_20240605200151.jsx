import "./Header.css";

const Header = () => {
  button {
    margin: 15px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    text-shadow: 1px 1px 2px grey;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  return (
    <div className="header-container">
      <div className="header-content">
        <h3>Order your favorite food here</h3>
        <p>
          Explore our diverse menu, which includes a variety of dishes
          meticulously crafted with the finest ingredients. Elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
