import React from "react";
import Slider from "../Components/Slider/Slider";
import PopularToys from "../Components/PopularToys";
import NewArrivals from "../Components/NewArrivals";
import ExclusiveToys from "../Components/ExclusiveToys";

const Home = () => {
  return (
    <div className="space-y-7 md:space-y-10">
      <Slider></Slider>
      <PopularToys></PopularToys>
      <NewArrivals></NewArrivals>
      <ExclusiveToys></ExclusiveToys>
    </div>
  );
};

export default Home;
