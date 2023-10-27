import React from "react";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
