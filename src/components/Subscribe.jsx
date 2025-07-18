import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-xl p-12 shadow-lg max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 bg-primary bg-opacity-10 w-40 h-40 rounded-full"></div>
          <h2 className="text-3xl font-volkhov font-bold text-dark mb-4">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
