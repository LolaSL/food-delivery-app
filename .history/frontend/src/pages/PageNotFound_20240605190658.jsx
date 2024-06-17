import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
      <div>
          <h2 style={{ color:"coral", fontWeight:"bold", margin:""  }}>PageNotFound</h2>
          <p>Go to <Link to="/" style={{ color:"teal", fontWeight:"bold"  }}>Home Page.</Link></p>
      </div>
  )
}

export default PageNotFound;