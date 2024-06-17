import axios from "axios";
import "./Orders.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import {assets} from "../../assets/assets.js"



const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => [fetchAllOrders()], []);
  return (
    <div className="order-add">
      <h3>Orders</h3>
      <div className="order-list">
        {orders.map((order, index) => {
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
            <p className="order-item-food">
              {order.items.map((item, index) => (
                index === order.items.length - 1 ? 
                  `${item.name} x${item.quantity}` : 
                  `${item.name} x${item.quantity}, `
              ))}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf;</span>
              <b>{order.status}</b>
            </p>
            <button>Track Order</button>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default Orders;
