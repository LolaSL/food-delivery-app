import Header from '../../components/header/Header.jsx'
import Explore from '../../components/explore/Explore.jsx'
import { useState } from 'react'


const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Explore category={category } setCategory={setCategory} />
    
    </div>
  )
}

export default Home