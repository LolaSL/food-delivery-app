import './Add.css'
import {assets} from 
const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className='add-img-upload flex-col'>
          <p>
            <label htmlFor="image">
              <img src={ assets.} />
            </label>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Add