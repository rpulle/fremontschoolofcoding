import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();    // Prevent the default form submission

    emailjs.sendForm('service_34vckjc', 'template_2czann5', e.target, 'TIi5N6tK7kY7d6xiP')
      .then((result) => {
          console.log(result.text);  // Log success result for debugging
          alert('Message sent successfully!');
          e.target.reset();  // Optionally reset the form after submission
      }, (error) => {
          console.log(error.text);  // Log error for debugging
      });
  }

  return (
    <div id= "contact-section" className="max-w-md mx-auto p-4">
      <h1
        className="text-center font-bold text-4xl pb-10 text-slate-200"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {'</ CONTACT US >'}
      </h1>
      <form className="space-y-4" onSubmit={sendEmail}>
        <label className="block">
          <span className="text-slate-50">Name</span>
          <input
            type="text"
            name="from_name"  // Added name attribute
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="First Last"
            required
          />
        </label>
        <label className="block">
          <span className="text-slate-50">Email</span>
          <input
            type="email"
            name="from_email"  // Added name attribute
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="Email Address"
            required
          />
        </label>
        <label className="block">
          <span className="text-slate-50">School Name</span>
          <input
            type="text"
            name="school_name"  // Added name attribute
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-[#273c60] focus:ring focus:ring-[#273c60]/50"
            placeholder="School Name"
            required
          />
        </label>
        <label className="block">
          <span className="text-slate-50">Message</span>
          <textarea
            rows="4"
            name="message"  // Added name attribute
            placeholder="Type your message here"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 focus:bg-cyan-800 focus:ring focus:ring-[#273c60]/50"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-cyan-300 text-black font-semibold rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-[#273c60]/50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
