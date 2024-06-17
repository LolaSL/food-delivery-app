import './Sidebar.css'
import { assets } from '../../assets/assets.js'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to={ '/add'}  className='sidebar-option'>
        <img className="logo" src={assets.add_icon} alt="logo" />
        <p>Add Items</p>
        </NavLink>
        <div className='sidebar-option'>
        <img className="logo" src={assets.order_icon} alt="logo" />
        <p>List Items</p>
        </div>
        <div className='sidebar-option'>
        <img className="logo" src={assets.order_icon} alt="logo" />
        <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar