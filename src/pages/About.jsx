import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-1">NINA PERRY</h2>
          <p className="text-gray-500 mb-4">manager</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">WHY US</h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Our consulting agency provides consulting, ideas, and resources
            for people working to create social change. We bring the right
            people together to challenge established thinking and drive
            transformation. We work with our clients to build the capabilities
            that enable organizations to achieve sustainable advantage.
          </p>
          <a href="#" className=" underline font-semibold">read more</a>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 shadow-xl">
          <div className="relative">
            <img 
              src="https://img.freepik.com/free-photo/businessman-his-office-making-ok-sign_1368-4539.jpg?ga=GA1.1.1160134057.1713374454&semt=ais_hybrid" 
              alt="Woman working on laptop" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 -mr-4 -mt-4 rounded-lg z-[-1]"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 -ml-4 -mb-4 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;