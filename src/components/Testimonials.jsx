import React from "react";

const testimonials = [
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    //image: "./images/sarah.jpg",
  },
  {
    quote:
      "Jadoo was great with the entire process from booking to the actual tours and transportation. Highly recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    //image:  "./images/sarah.jpg".
  },
];

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <p className="text-accent text-center">Testimonials</p>
      <h2 className="text-3xl md:text-4xl font-volkhov font-bold text-dark text-center mb-16">
        What People Say About Us
      </h2>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white p-8 rounded-xl shadow-md ${
              index === 0 ? "md:w-2/3" : "md:w-1/3"
            }`}
          >
            <p className="text-accent mb-6 italic">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                <p className="text-accent text-sm">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
