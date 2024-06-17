import { Link } from "react-router-dom";
import './PageNotFound.css';

const PageNotFound = () => {
  return (
      <div className="not-found">
          <h2 className="title-not-founstyle={{ color:"coral", fontWeight:"bold", margin:"50px"  }}>Page Not Found 404 ERROR</h2>
          <p>Go to <Link to="/" style={{ color:"teal", fontWeight:"bold", bottom:"30px"  }}>Home Page.</Link></p>
      </div>
  )
}

export default PageNotFound;