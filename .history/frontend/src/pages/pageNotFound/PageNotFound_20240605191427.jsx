import { Link } from "react-router-dom";
import './PageNotFound.css';

const PageNotFound = () => {
  return (
      <div className="not-found">
          <h2 className="title-not-found">Page Not Found... 404 ERROR</h2>
          <p className="not-found-paragraph">Go to <Link to="/" >Home Page.</Link></p>
      </div>
  )
}

export default PageNotFound;