import { useState } from "react";
import "./MyOders.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const MyOrders = () => {

  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
const fetchOrders
    
    
  return <div>MyOrders</div>;
};

export default MyOrders;
