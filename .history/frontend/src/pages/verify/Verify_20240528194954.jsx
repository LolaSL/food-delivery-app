import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
import { useContext, useEffect, useCallback } from "react";
import axios from "axios";

const Verify = () => {
  
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  console.log(orderId, success);
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = useCallback(async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Verification error:", error);
      navigate("/");
    }
  }, [success, orderId, url, navigate]);

  useEffect(() => {
    verifyPayment();
  }, [verifyPayment]); // Include verifyPayment in the dependency array

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;

