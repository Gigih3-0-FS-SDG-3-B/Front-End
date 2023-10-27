import React from "react";

class Collapse extends React.Component {
  render() {
    return (
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200 transition-all duration-300 ease-in-out"
      >
        <div className="collapse-title text-medium font-medium">
          Apa caregiver di FindCare terverifikasi? Apa caregiver di FindCare
          terverifikasi?
        </div>
        <div className="collapse-content transition-all duration-300 ease-in-out">
          <p tabIndex={0}>Iya</p>
        </div>
      </div>
    );
  }
}

export default Collapse;
