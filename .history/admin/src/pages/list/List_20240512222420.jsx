import { useState } from 'react'
import './List.css'
import axios from 'axios'
import { url } from '../../assets/assets'


const List = () => {

const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
  }
  
  return (
    <div>List</div>
  )
}

export default List