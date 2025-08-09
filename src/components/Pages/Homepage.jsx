import React from "react";
import Hero from "./Banner";
import Newslatter from "./Newslatter";
import TopFoods from "./TopFoods";
import WhyChooseUs from "./WhyChooseUs";
import { Link } from "react-router";
import Testimonials from "./Testimonials";

const Homepage = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-12 ">
      <div className="hero h-15" >
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <h1 className="mb-5 text-5xl font-bold text-[#004952] ">Nexyn Foods</h1>
                       <div className="flex flex-row "> <p className="mb-7 text-lg text-[#004952]">The more you see the more delicious you can test. </p> <div><Link
          to="/foods"
          className="btn btn-sm  text-white bg-[#004952] border-none  hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300"
        >
          Test Now!
        </Link></div></div>
                    </div>
                </div>
            </div>
      <Hero />
      <TopFoods />

      <WhyChooseUs />
      <Testimonials/>
      <Newslatter />
    </div>
  );
};

export default Homepage;
