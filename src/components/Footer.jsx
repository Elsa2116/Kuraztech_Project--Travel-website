import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Jadoo.</h3>
            <p className="text-gray-400 mb-4">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Affilates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">More</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Airlinefees
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Airline
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center"
              >
                <span className="text-primary">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center"
              >
                <span className="text-primary">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center"
              >
                <span className="text-primary">t</span>
              </a>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Discover our app
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
