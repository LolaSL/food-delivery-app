import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favorite food here</h2>
        <p>
          Explore our diverse menu, which includes a variety of dishes
          meticulously crafted with the finest ingredients.<br/> Elevate your dining
          experience, one delicious meal at a time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
