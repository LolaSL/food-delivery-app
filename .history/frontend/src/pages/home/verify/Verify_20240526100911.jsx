import "./Verify.css"
import { useSearchParams } from 'react-router-dom';
import { StoreContext } from "../../../context/StoreContext.jsx";

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    console.log(orderId, success)
    const {url} = useContext(StoreContext)
    
    
    return (
      <div className>
          Verify
      </div>
  )
}

export default Verify