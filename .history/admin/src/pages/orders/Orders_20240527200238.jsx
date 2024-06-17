// import axios from "axios";
// import "./Orders.css";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useEffect } from "react";
// import {assets} from "../../assets/assets.js"



// const Orders = ({ url }) => {
//   const [orders, setOrders] = useState([]);
//   const fetchAllOrders = async () => {
//     const response = await axios.get(url + "/api/order/list");
//     if (response.data.success) {
//       setOrders(response.data.data);
//       console.log(response.data.data);
//     } else {
//       toast.error("Error");
//     }
//   };

//   useEffect(() => [fetchAllOrders()], []);
//   return (
//     <div className="order-add">
//       <h3>Orders</h3>
//       <div className="order-list">
//         {orders.map((order, index) => {
//           <div key={index} className="order-item">
//             <img src={assets.parcel_icon} alt="" />
//             <div>
//             <p className="order-item-food">
//               {order.items.map((item, index) => (
//                 index === order.items.length - 1 ?
//                   `${item.name} x${item.quantity}` :
//                   `${item.name} x${item.quantity}, `
//               ))}
//             </p>
//             <p>${order.amount}.00</p>
//             <p>Items: {order.items.length}</p>
//             <p>
//               <span>&#x25cf;</span>
//               <b>{order.status}</b>
//             </p>
//             <button>Track Order</button>
//             </div>
//           </div>
//         })}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import axios from "axios";
import "./Orders.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";  // Import PropTypes
import { toast } from "react-toastify";
import { assets } from "../../assets/assets.js";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
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
  };

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);  // Correctly calling the fetchAllOrders

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
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button>Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Adding PropTypes validation
Orders.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Orders;

