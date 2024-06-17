import axios from 'axios';
import './Orders.css';
import { useState } from 'react';
import {t}

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url+'/api/order/list')
  if (response.data.success) {
    setOrders(response.data.data);
    console.log(response.data.data)
    }
  else {
    
    }
  
  }
  return (
    <div>Orders</div>
  )
}

export default Orders