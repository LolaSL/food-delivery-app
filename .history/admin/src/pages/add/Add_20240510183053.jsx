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
        <div className="" ></div>
      </form>
    </div>
  )
}

export default Add