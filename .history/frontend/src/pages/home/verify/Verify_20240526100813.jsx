import "./Verify.css"
import { useSearchParams } from 'react-router-dom'
import {StorContext}

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    console.log(orderId, success)
    const {url} = useContext(StoreContext)
    
    
    return (
      <div>
          Verify
      </div>
  )
}

export default Verify