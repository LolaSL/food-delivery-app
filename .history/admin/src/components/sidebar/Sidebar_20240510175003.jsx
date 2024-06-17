import './Sidebar.css'
import { assets } from '../../assets/assets.js'

const Sidebar = () => {
  return (
    <div>
      <div>
        <div>
        <img className="logo" src={assets.logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar