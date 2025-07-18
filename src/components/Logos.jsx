import React from "react";

const logos = [
  "Expedia",
  "Booking.com",
  "Airbnb",
  "Tripadvisor",
  "Travelocity",
];

const Logos = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-wrap justify-center items-center gap-12">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="text-2xl font-bold text-accent opacity-70 hover:opacity-100 transition"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
