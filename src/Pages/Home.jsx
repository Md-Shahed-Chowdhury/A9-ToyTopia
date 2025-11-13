import React, { Suspense } from "react";
import Slider from "../Components/Slider/Slider";
import PopularToys from "../Components/PopularToys";
import NewArrivals from "../Components/NewArrivals";
import ExclusiveToys from "../Components/ExclusiveToys";

const Home = () => {
  return (
    <div className="space-y-7 md:space-y-10">
      <Slider></Slider>
      <Suspense fallback={<h2 className="text-5xl">loading.......</h2>}>
        <PopularToys></PopularToys>
      </Suspense>
      <NewArrivals></NewArrivals>
      <ExclusiveToys></ExclusiveToys>
    </div>
  );
};

export default Home;
