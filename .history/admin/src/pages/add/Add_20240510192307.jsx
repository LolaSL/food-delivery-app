import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios';



const Add = () => {

  const url = "http://localhost:4000 ";
  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"

  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data=> ({...data, [name]:value}))
  }

  const onSubmitHandler = async(event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
const response = await axios.post()
  }


  return (
    <div className="add">
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload Image </p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image): assets.upload_area} alt="" />
            </label>
          <input onChange={ (e)=>setImage(e.target.files[0])}type="file" id="image" hidden  required/>
        </div>
        <div className="add-product-name flex-col" >
          <p>Product Name </p>
          <input onChange={onChangeHandler} value={data.name } type="text" name="name" placeholder="Product name"/>
        </div>
        <div className="add-product-description flex-col" >
          <p>Product Description </p>
          <textarea onChange={onChangeHandler} value={data.description}name="description" rows="6" placeholder="description" required/>
        </div>
        <div className="add-category-price">
        <div className="add-category flex-col" >
          <p>Product Category </p>
            <select  name="category" id="category" >
            <option value='Salad'>Salad</option>
            <option value='Rolls'>Rolls</option>
            <option value='Deserts'>Deserts</option>
            <option value='Sandwich'>Sandwich</option>
            <option value='Pure'>Pure</option>
            <option value='Pasta'>Pasta</option>
            <option value='Noodles'>Noodles</option>
          </select>
        </div>
        <div className="add-product-price flex-col" >
          <p>Product Price </p>
          <input onChange={onChangeHandler} value={data.price } type="Number" name="price" placeholder="Price"/>
        </div></div>
        <button type="submit" className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add