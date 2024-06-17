import Header from '../../components/header/Header.jsx'
import Explore from '../../components/explore/Explore.jsx'
import { useState } from 'react'


const Home = () => {
  const [category, setCategory] = useState
  return (
    <div>
      <Header />
    <Explore />
    </div>
  )
}

export default Home