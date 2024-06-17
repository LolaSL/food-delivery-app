import './Add.css'
import { assets } from '../../assets/assets'


const Add = () => {
  return (
    <div className="add">
      <form className='flex-col'>
        <div className='add-img-upload flex-col'>
          <p>Upload Image </p>
            <label htmlFor="image">
              <img src={ assets.upload_area} alt="" />
            </label>
            <input type="file" id="image" hidden  required/>
        </div>
        <div className="add-product-name flex-col" >
          <p>Product Name </p>
          <input type="text" name="name" placeholder="Product name"/>
        </div>
        <div className="add-product-description flex-col" >
          <p>Product Description </p>
          <textarea  name="description" rows="6" placeholder="description" required/>
        </div>
        <div className="add-category-price"></div>
        <div className="ad-category flex-col" >
          <p>Product Category </p>
          <select name="category" id="category" >
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
          <input type="Number" name="price" placeholder="Price"/>
        </div>
        <button type="submit" className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add