import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx"
import { Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart.jsx'
import Order from "./components/order/Order.jsx"
import Footer from "./components/footer/Footer.jsx";


function App() {

  const [showLogin, setShowLogin] = useSta

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>  }/>
        <Route path='/order' element={<Order/>  }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
