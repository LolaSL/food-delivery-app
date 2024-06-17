import "./Verify.css"
import {useSearchParams} from 'react-router-dom'

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    con
    return (
      <div>
          Verify
      </div>
  )
}

export default Verify