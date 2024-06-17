import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
      <div>
          <h2>PageNotFound</h2>
          <p>Go to <Link to="/" style={{ color:"teal", fonrWeight:"bold"  }}>Home Page.</Link></p>
      </div>
  )
}

export default PageNotFound;