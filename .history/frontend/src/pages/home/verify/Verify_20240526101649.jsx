import "./Verify.css"
import { useSearchParams } from 'react-router-dom';
import { StoreContext } from "../../../context/StoreContext.jsx";
import { useContext } from "react";
import axios from "axios";
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    console.log(orderId, success)
    const {url} = useContext(StoreContext)
    
    const verifyPayment = async () => {
        const response = await axios
    }
    
    return (
      <div className="verify">
        <div className="spinner"></div>
      </div>
  )
}

export default Verify