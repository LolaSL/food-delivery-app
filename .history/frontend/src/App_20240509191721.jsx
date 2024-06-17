import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx"
import { Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart.jsx'
import Order from "./components/order/Order.jsx"
import Footer from "./components/footer/Footer.jsx";
import { useState } from "react";
import Login from "./components/login/Login.jsx";


function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login/>:<div></div>}
    <div className="app">
      <Navbar setS/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>  }/>
        <Route path='/order' element={<Order/>  }/>
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
