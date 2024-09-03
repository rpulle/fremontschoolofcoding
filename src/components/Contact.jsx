import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1
        className="text-center font-bold text-4xl pb-10"
        style={{ fontFamily: 'Poppins, sans-serif', color: '#273c60' }}
      >
        {'</ CONTACT US >'}
      </h1>
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="First Last"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="Email Address"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">School Name</span>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="School Name"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Message</span>
          <textarea
            rows="4"
            placeholder="Type your message here"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#273c60] text-white font-semibold rounded-md hover:bg-[#334c76] focus:outline-none focus:ring-2 focus:ring-[#273c60]/50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
