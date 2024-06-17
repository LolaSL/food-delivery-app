import { useState } from 'react'
import './List.css'
import axios from 'axios'
import { url } from '../../assets/assets'


const List = () => {

const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}`)
  }
  
  return (
    <div>List</div>
  )
}

export default List