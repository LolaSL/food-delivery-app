import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import {Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App

