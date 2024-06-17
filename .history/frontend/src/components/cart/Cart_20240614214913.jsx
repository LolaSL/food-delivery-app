import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login"; // Import the Login component

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, isLoggedIn } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/order");
    } else {
      setShowLoginPopup(true); // Show the login popup if not logged in
    }
  };

  return (
    <div className="cart">
      {showLoginPopup && <Login setShowLogin={setShowLoginPopup} />} {/* Conditionally render the login popup */}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="card
