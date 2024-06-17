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
          <input type="text" name="name" placeholder="type here"/>
        </div>
        <div className="add-product-description flex-col" >
          <p>Product Description </p>
          <textarea  name="description" rows="6" placeholder="description" required/>
        </div>
        <div className="add-product-category flex-col" >
          <p>Product Description </p>
          <input type="text"  name="category" rows="6" placeholder="description" required/>
        </div>
      </form>
    </div>
  )
}

export default Add