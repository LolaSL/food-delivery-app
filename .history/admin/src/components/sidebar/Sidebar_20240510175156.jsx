import './Sidebar.css'
import { assets } from '../../assets/assets.js'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <div className='sidebar-option'>
        <img className="logo" src={assets.add_icon} alt="logo" />
        <p>Add Items</p>
        </div>
        <div className='sidebar-option'>
        <img className="logo" src={assets.order_icon} alt="logo" />
        <p>List Items</p>
        </div>
        <div className='sidebar-option'>
        <img className="logo" src={assets.order_icon} alt="logo" />
        <p>Add Items</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar