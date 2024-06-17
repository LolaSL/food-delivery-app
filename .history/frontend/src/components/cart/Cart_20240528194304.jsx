import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
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
              <>
                <div key={item._id} className="cart-items-title cart-items-item" >
                  <img src={url + "/images/"+ item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="card-promocode">
          <p>If you have a promo code , enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button className="btn-submit">Submit</button>
          </div>
        </div>
        <div className="cart-total">
          <h2>Cart Total</h2>
        </div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Free</p>
          <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
        </div>
        <div>
          <button className="btn-checkout" onClick={() => navigate("/order")}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
