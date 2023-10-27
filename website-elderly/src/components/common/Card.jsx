import React from "react";
import { FiMap, FiStar } from "react-icons/fi";

class Card extends React.Component {
  render() {
    return (
      <div className="card w-80 bg-base-100 border-2 border-base-300 flex-shrink-0 items-center text-center">
        <div className="avatar">
          <div className="w-24 h-24 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h3 className="card-title">Amanda Camile</h3>
          <div className="flex items-center">
            <FiMap className="mr-4" />
            <p>Bandung</p>
          </div>
          <div className="flex items-center">
            <FiStar className="mr-4" />
            <p>4.5/5</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
