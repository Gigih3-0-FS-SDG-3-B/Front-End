import React from "react";

const backgroundImageStyle = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="bg-primary text-white p-20" style={backgroundImageStyle}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome to FindCare!</h1>
          <p className="text-lg mtext-white p-20 mt-10 mb-10b-4">
            We provide the best services for your needs. Check out our amazing
            features and products.
          </p>
          <button className="btn btn-lg btn-primary glass">Learn more</button>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
