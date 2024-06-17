import "./Verify.css"
import { useSearchParams } from 'react-router-dom';
import { StoreContext } from "../../../context/StoreContext.jsx";
import { useContext } from "react";
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    console.log(orderId, success)
    const {url} = useContext(StoreContext)
    
    
    
    return (
      <div className="verify">
        <div className="spinner"></div>
      </div>
  )
}

export default Verify