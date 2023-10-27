import React from "react";
import Jumbotron from "../components/Home/Jumbotron";
import Testimoni from "../components/Home/Testimoni";
import Card from "../components/common/Card";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="caregiver-profile prose text-center mx-auto mt-4 mb-4 p-8 w-full bg-slate-200">
          <h1>Find Caregiver</h1>
          <Card />
        </div>
        <div className="testimoni w-full prose text-center mx-auto mt-4 mb-4 p-8 bg-purple-200 ">
          <h1>What our customers say</h1>
          <div className="flex">
            <Testimoni />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
