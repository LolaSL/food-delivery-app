import Header from "../../components/header/Header.jsx";
import Explore from "../../components/explore/Explore.jsx";
import { useState } from "react";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
