import './AppDownload.css';
import { assets } from '../../assets/assets.js';


const AppDownload = () => {
  return (
      <div className="app-download" id="app-download">
          <h1>For Better Experience Download <br /> Tomato App</h1>
          <div className='app-download-platforms'>
          <img
            src={assets.play_store}
            alt="Add white icon"
              />
                     <img
            src={assets.app_store}
            alt="Add white icon"
          />

          </div>
    </div>
  )
}

export default AppDownload;