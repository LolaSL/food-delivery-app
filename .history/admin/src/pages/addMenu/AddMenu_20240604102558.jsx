import "./Add.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from '../../assets/assets.js'

const AddMenu = () => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!image) {
      toast.error("Please select an image to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", image);
    try {
      const response = await axios.post(`${url}/api/menu/addMenu`, formData);
    if (response.data.success) {
      setData({
        name: ""
     
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    } catch (error) {
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <h2 className="title-add">Add Menu Item</h2>
          <p>Upload Image </p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Menu Item Name </p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Product name"
          />
        </div>
        
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;


