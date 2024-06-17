import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/'



const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

