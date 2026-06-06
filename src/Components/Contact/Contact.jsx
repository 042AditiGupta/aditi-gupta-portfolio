import React from 'react';
import phone from "../../assets/contact.png";

function Contact() {
  return (
    <div id="Contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-10">
      
      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-10 text-center">
        My Contact
      </p>

      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-center gap-12">
        
        
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-[60%] drop-shadow-[4px_4px_12px_rgb(87_196_220)]"
            src={phone}
            alt="Contact"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <form
            action="https://formspree.io/f/meoklopg"
            method="POST"
            className="w-full max-w-md space-y-4"
          >
            <input
              name="username"
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-2 rounded w-full text-black"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded w-full text-black"
              required
            />
            <textarea
              name="message"
              placeholder="Message me"
              className="border border-gray-300 p-2 rounded w-full h-32 text-black"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 w-full transition duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
