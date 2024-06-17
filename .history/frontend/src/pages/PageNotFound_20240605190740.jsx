import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
      <div style={{ textAlign:  }}>
          <h2 style={{ color:"coral", fontWeight:"bold", margin:"50px"  }}>PageNotFound</h2>
          <p>Go to <Link to="/" style={{ color:"teal", fontWeight:"bold"  }}>Home Page.</Link></p>
      </div>
  )
}

export default PageNotFound;