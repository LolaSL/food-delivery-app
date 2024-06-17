import './Sidebar.css'
import { assets } from '../../assets/assets.js'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <
        <NavLink to={ '/add'}  className='sidebar-option active'>
        <img className="logo" src={assets.add_icon} alt="logo" />
        <p>Add Items</p>
        </NavLink>
        <NavLink to={ '/list'} className='sidebar-option'>
        <img className="logo" src={assets.order_icon} alt="logo" />
        <p>List Items</p>
        </NavLink>
         <NavLink to={ '/orders'}  className='sidebar-option'>
        <img className="logo" src={assets.order_icon} alt="logo" />
        <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar