import axios from "axios";
import "./Orders.css";
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets.js";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error fetching orders");
      console.error(error);
    }
  }, [url]); // url is included as a dependency

  const statusHandler = async (event, orderId) => {
   const response = await axios.post(url+"/api/order/status", {orderId, status:event.tar})
  };

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  return (
    <div className="order-add">
      <h3>Orders</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, itemIndex) =>
                  itemIndex === order.items.length - 1
                    ? `${item.name} x${item.quantity}`
                    : `${item.name} x${item.quantity}, `
                )}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ", "}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
                <p className="order-item-phone">{order.address.phone + ". "}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}.00</p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order._id}
              >
                <option value="Food processing">Food processing</option>
                <option value="Out of Delivery">Out of Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              {/* <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p> */}
              {/* <button>Track Order</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Orders.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Orders;
