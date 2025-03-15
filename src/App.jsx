import React from "react";
import Header from "./front/components/head/Header";

import Navbar from "./front/components/nav/Navbar";
import "./App.css";
import Footer from "./front/components/foot/Footer";

import AppRoute from "./front/routes";


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />

      {/* className='mx-auto my-[30px] lg:w-[90px] md:w-[90%] sm:w-full' */}
      <div className="grid grid-cols-12 mx-auto my-[30px] lg:w-[97%] md:w-[97%] sm:w-full">
        {/* Left Sidebar */}
        <div className="col-span-1 lg:block md:hidden">
          <div className="sticky top-5">
            <img
              src="https://image.thmeythmey.com/advertising/478/130__550-lleft11.png"
              alt=""
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-10 md:col-span-10 col-span-12">
          <AppRoute/>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-1 lg:block md:hidden">
          <div className="sticky top-5">
            <img
              src="https://image.thmeythmey.com/advertising/478/130__550-lleft11.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
