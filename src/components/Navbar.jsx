import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
      <div className="text-3xl font-bold text-dark">Jadoo</div>
      <div className="hidden md:flex space-x-12">
        <a href="#" className="text-dark font-medium">
          Destinations
        </a>
        <a href="#" className="text-accent">
          Hotels
        </a>
        <a href="#" className="text-accent">
          Flights
        </a>
        <a href="#" className="text-accent">
          Bookings
        </a>
        <a href="#" className="text-accent">
          Login
        </a>
        <button className="border border-dark rounded-md px-6 py-2 text-dark">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
