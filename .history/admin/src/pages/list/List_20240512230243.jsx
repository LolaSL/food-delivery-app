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
    if (response.data.success) {
      setList(response.data.data);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  const removeFood = async (foodId) => {
   const response=await axios.post(`${url}/api/food/remove`, {id: foodId})
    await fetchList();
    if (response.data.success) {
      toast
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Dishes List</p>
      <div className="list-table">
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="list-table-format">
                <img src={`${url}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={() => removeFood(item._id)} className="cursor">
                  x
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;