import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Contact = ({theme}) => {
  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-gray-300">
        <img 
          src="https://img.freepik.com/free-photo/full-shot-cool-people-wearing-chain-necklace_23-2149409723.jpg?ga=GA1.1.1160134057.1713374454&semt=ais_hybrid" 
          alt="Customer Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">Customer Help</h1>
            <p className="text-sm md:text-base max-w-md mx-auto">
              If talking to a real-life human is more your thing, you can reach our
              Customer Happiness Team via email below.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-grow py-12 px-4 sm:px-6 lg:px-8 `}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div>
              <h2 className='text-xl font-semibold mb-4'>How Can We Help?</h2>
              <ul className="space-y-2">
                <li>FAQs</li>
                <li>Ordering</li>
                <li>Shipping</li>
                <li>Returns / Exchanges</li>
                <li>International</li>
                <li>Sustainability</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Middle Column - Contact Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium ">Subject</label>
                  <input type="text" id="subject" name="subject" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 text-black px-2 py-1 text-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium ">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 text-black px-2 py-1 text-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 text-black px-2 py-1 text-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium ">Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-400 text-black px-2 py-1 text-lg"></textarea>
                </div>
                <div className="mb-4">
                  {/* <div className="flex items-center">
                    <input id="robot" name="robot" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    <label htmlFor="robot" className="ml-2 block text-sm ">I'm not a robot</label>
                  </div> */}
                </div>
                <div className='w-full flex justify-center'>
                <button type="submit" className="w-[50%] bg-gray-400 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                  SUBMIT
                </button>
                </div>
              </form>
            </div>
          </div>

          {/* Support Hours */}
          <div className="mt-12 text-center md:text-right">
            <h3 className="font-semibold">Support Hours:</h3>
            <p className="text-sm">Mon-Fri 9:00am - 5:00pm PST</p>
            <p className="text-sm">*Excludes Holidays</p>
            <p className="mt-2 text-sm">Looking for more info on products, shipping, fabric, and more?</p>
            <button className="mt-2 bg-white border border-gray-300 text-gray-700 py-1 px-4 rounded-md hover:bg-gray-100 transition duration-300">
              VIEW FAQ
            </button>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MailOutlineIcon className="mx-auto h-12 w-12 text-gray-400"/>
          <h2 className="mt-2 text-3xl text-blue-400 font-semibold">Get in Touch</h2>
          <p className="mt-2 text-gray-600">Have questions about your order, or a general inquiry?</p>
          <button className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition duration-300">
            EMAIL US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;