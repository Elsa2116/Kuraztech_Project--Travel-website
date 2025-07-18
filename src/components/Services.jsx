import React from "react";

const services = [
  {
    icon: "✈️",
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it."
  },
  {
    icon: "🏨",
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the."
  },
  {
    icon: "🌍",
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening."
  },
  {
    icon: "⚙️",
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers."
  }
];

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <p className="text-accent text-center">Category</p>
      <h2 className="text-3xl md:text-4xl font-volkhov font-bold text-dark text-center mb-16">
        We Offer Best Services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition relative z-10">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-dark">{service.title}</h3>
            <p className="text-accent">{service.description}</p>
            {index === 0 && (
              <div className="absolute -top-8 -right-8 bg-light w-32 h-32 rounded-full -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;