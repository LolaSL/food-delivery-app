import Header from "../../components/header/Header.jsx";
import Explore from "../../components/explore/Explore.jsx";
import { useState } from "react";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay.jsx";
import AppDownload from "../../components/appDownload/AppDownload.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    <AppDownload
    </div>
  );
};

export default Home;
