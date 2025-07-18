import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <p className="text-accent uppercase text-lg mb-4">
            Best Destinations around the world
          </p>
          <h1 className="text-5xl md:text-7xl font-volkhov font-bold text-dark mb-6 leading-tight">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-accent mb-8 max-w-md">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening.
          </p>
          <div className="flex items-center space-x-8">
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition">
              Find out more
            </button>
            <button className="flex items-center">
              <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-4 text-accent">Play Demo</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/Images/hero.jpg
          "
            alt="Travel"
            className="rounded-lg"
          />
          <div className="absolute -bottom-8 -left-8 bg-light w-32 h-32 rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
