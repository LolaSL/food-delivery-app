import { useState } from "react";
import "./List.css";
import axios from "axios";
import { url } from "../../assets/assets";
import { toast } from "react-toastify";
import { useEffect } from "react";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return <div className="">List</div>;
};

export default List;
