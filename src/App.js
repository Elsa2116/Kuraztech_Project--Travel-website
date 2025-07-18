import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import BookingSteps from "./components/BookingSteps";
import Testimonials from "./components/Testimonials";
import Logos from "./components/Logos";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
//import mike from "../Images/mike.jpg"; //
//import sarah from "../Images/sarah.jpg";

function App() {
  return (
    <div className="font-poppins bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookingSteps />
      <Testimonials />
      <Logos />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
