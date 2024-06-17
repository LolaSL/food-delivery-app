import { assets } from '../../assets/assets.js';
import './Navbar.css';


const Navbar = () => {

  return (
    <div className="navbar">

          <img className="logo" src={assets.logo} alt="logo" />
               <h2>Admin Dashboard</h2> 
      <img className="profile" src={assets.profile_image} alt="logo" />
    </div>
  )
}

export default Navbar;