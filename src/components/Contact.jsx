import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();    // Prevent the default form submission

    emailjs.sendForm('service_1szs6i9', 'template_nqgxaai', e.target, 'w8kAJ0JPRT65UrSfv')
      .then((result) => {
          console.log(result.text);  // Log success result for debugging
          alert('Message sent successfully!');
          e.target.reset();  // Optionally reset the form after submission
      }, (error) => {
          console.log(error.text);  // Log error for debugging
      });
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1
        className="text-center font-bold text-4xl pb-10"
        style={{ fontFamily: 'Poppins, sans-serif', color: '#273c60' }}
      >
        {'</ CONTACT US >'}
      </h1>
      <form className="space-y-4" onSubmit={sendEmail}>
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="from_name"  // Added name attribute
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="First Last"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="from_email"  // Added name attribute
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="Email Address"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">School Name</span>
          <input
            type="text"
            name="school_name"  // Added name attribute
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="School Name"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Message</span>
          <textarea
            rows="4"
            name="message"  // Added name attribute
            placeholder="Type your message here"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            required
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
