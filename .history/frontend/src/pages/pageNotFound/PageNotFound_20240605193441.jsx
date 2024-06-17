import { Link } from "react-router-dom";
import './PageNotFound.css';
import notFoundImage from '../../assets/not-found.png'; // Adjust the path as necessary

const PageNotFound = () => {
  return (
    <div className="not-found" style={{ backgroundImage: `url(${notFoundImage})` }}>
      <h2 className="not-found-paragraph">Go to <Link to="/" >Home Page.</Link></h2>
      <p className="not-found-paragraph">Go to <Link to="/" >Home Page.</Link></p>
    </div>
  )
}

export default PageNotFound;