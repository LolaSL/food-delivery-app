import { useContext, useState } from "react";
import "./Order.css";
import { StoreContext } from "../../context/StoreContext";

const Order = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      
    })
  }
  return (
    <form className="order" onSubmit={placeOrder}>
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={data.firstName}
            onChange={onChangeHandler}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={data.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={data.email}
          onChange={onChangeHandler}
        />
        <input
          name="street"
          type="text"
          placeholder="Street"
          value={data.street}
          onChange={onChangeHandler}
        />
        <div className="multi-fields">
          <input
            name="city"
            type="text"
            placeholder="City"
            value={data.city}
            onChange={onChangeHandler}
          />
          <input
            name="state"
            type="text"
            placeholder="State"
            value={data.state}
            onChange={onChangeHandler}
          />
        </div>
        <div className="multi-fields">
          <input
            name="zipcode"
            type="text"
            placeholder="Zip code"
            value={data.zipcode}
            onChange={onChangeHandler}
          />
          <input
            name="country"
            type="text"
            placeholder="Country"
            value={data.country}
            onChange={onChangeHandler}
          />
        </div>
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={data.phone}
          onChange={onChangeHandler}
        />
      </div>
      <div className="order-right">
        <div className="cart-total">
          <h3>Cart Totals</h3>
          <div>
            <div className="cart-totals-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button className="btn-payment" type="submit">Proceed to payment</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
