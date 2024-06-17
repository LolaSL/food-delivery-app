import { useState } from 'react'
import './List.css'
import axios from 'axios'
import {ure}


const List = () => {

const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get()
  }
  
  return (
    <div>List</div>
  )
}

export default List