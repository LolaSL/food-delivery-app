import { useState } from "react";
import "./MyOders.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useEffect } from "react";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
      );
      setData(response.data.data);
      console.log(response.data.data)
  };

    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    },[ token])
    
    return <div className="my-orders">
        My Orders
    </div>;
};

export default MyOrders;
