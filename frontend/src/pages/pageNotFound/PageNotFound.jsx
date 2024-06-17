import { Link } from "react-router-dom";
import './PageNotFound.css';
import notFoundImage from '../../assets/not-found.png';

const PageNotFound = () => {
  return (
    <div className="not-found" style={{ backgroundImage: `url(${notFoundImage})` }}>
      <h2 className="not-found-paragraph">Go to <Link to="/">Home Page.</Link></h2>
      
    </div>
  )
}

export default PageNotFound;