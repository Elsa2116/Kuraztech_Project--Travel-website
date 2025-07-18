import React from "react";

const steps = [
  {
    icon: "📍",
    title: "Choose Destination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "💳",
    title: "Make Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "✈️",
    title: "Reach Airport on Selected Date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const BookingSteps = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <p className="text-accent">Easy and Fast</p>
          <h2 className="text-3xl md:text-4xl font-volkhov font-bold text-dark mb-6">
            Book Your Next Trip In 3 Easy Steps
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mr-6">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-accent">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
            <img
              src="/Images/Booking.jpg"
              alt="Trip to Greece"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-dark mb-2">
              Trip To Greece
            </h3>
            <p className="text-accent mb-4">14-29 June | by Robbin joseph</p>

            <div className="flex space-x-4 mb-4">
              <span className="bg-light px-3 py-1 rounded-full text-sm">
                Leisure
              </span>
              <span className="bg-light px-3 py-1 rounded-full text-sm">
                Vacation
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-400 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-accent">4.8 (1.2k reviews)</span>
              </div>
              <div className="bg-primary text-white p-2 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-light w-32 h-32 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
