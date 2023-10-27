import React from "react";
import Testimoni from "../components/Home/Testimoni";
import Card from "../components/common/Card";
import Hero from "../components/Home/Hero";
import Collapse from "../components/Home/Collapse";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="caregiver-profile text-center p-8 bg-slate-200 w-full">
          <div className="prose mx-auto p-8">
            <h1>Find Caregiver</h1>
          </div>
          <div className="flex m-8">
            <Card />
          </div>
        </div>
        <div className="testimoni text-center p-8 bg-purple-200 w-full ">
          <div className="prose mx-auto p-8">
            <h1>What our customers say</h1>
          </div>
          <div className="flex mt-4 mb-8">
            <Testimoni />
          </div>
        </div>
        <div className="faq w-full text-center p-8 bg-base">
          <div className="prose mx-auto p-8">
            <h1>FAQ</h1>
          </div>
          <div className="w-1/2 text-justify mx-auto">
            <Collapse />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
