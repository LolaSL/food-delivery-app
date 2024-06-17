import axios from 'axios';
import './Orders.css'
import { useState } from 'react'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url+'/api/order/list')
  if (condition) {
    
  }
  
  }
  return (
    <div>Orders</div>
  )
}

export default Orders