import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
      <div style={{ textAlign:"center"  }}>
          <h2 style={{ color:"coral", fontWeight:"bold", margin:"50px"  }}>Page NotFound</h2>
          <p>Go to <Link to="/" style={{ color:"teal", fontWeight:"bold", bottom:"30px"  }}>Home Page.</Link></p>
      </div>
  )
}

export default PageNotFound;