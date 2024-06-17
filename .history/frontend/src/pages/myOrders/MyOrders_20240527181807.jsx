import { useState } from 'react'
import './MyOders.css'
import { useContext } from 'react';

const MyOrders = () => {

const{url, token} = useContext()

    const [data, setData] = useState([]);


  return (
    <div>MyOrders</div>
  )
}

export default MyOrders