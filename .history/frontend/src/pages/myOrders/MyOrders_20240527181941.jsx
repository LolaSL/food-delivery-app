import { useState } from "react";
import "./MyOders.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axois from 'axios'


const MyOrders = () => {

  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
    const fetchOrders = async (req, res, next) => {
    const response = await axios.post()
}
    
    
  return <div>MyOrders</div>;
};

export default MyOrders;
