import { useState } from 'react'
import './List.css'
import axios from 'axios'
import { url } from '../../assets/assets'
import { toast } from "react-toastify";

const List = () => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setImage(response.data.data);
      toast.success(response.data.message);
    }
    else {
      
    }

    return (
      <div>List</div>
    )
  }


export default List