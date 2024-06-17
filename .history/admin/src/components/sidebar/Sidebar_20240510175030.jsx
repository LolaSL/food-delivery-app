import './Sidebar.css'
import { assets } from '../../assets/assets.js'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className=''>
        <div>
        <img className="logo" src={assets.add_icon} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar