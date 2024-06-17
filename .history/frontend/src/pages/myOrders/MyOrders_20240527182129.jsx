import { useState } from "react";
import "./MyOders.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'


const MyOrders = () => {

  const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
    
    const fetchOrders = async (req, res) => {
        const response = await axios.post(url + '/api/order/userorders', {}, { headers: {token}})

    }
    
    
  return <div>MyOrders</div>;
};

export default MyOrders;
