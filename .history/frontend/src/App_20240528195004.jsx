import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart.jsx";
import PlaceOrder from "./components/order/PlaceOrder.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useState } from "react";
import Login from "./components/login/Login.jsx";
import Verify from "./pages/verify/Verify.jsx";
import MyOrders from "./pages/myOrders/MyOrders.jsx";



function App() {
  
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <div></div>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
