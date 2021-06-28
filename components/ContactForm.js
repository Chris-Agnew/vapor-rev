import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
   <div id="contact" className="flex items-center justify-center bg-black">
   <div className="w-full mt-10 rounded md:w-1/4 bg-dark-blue">
   <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center m-5">
        <label htmlFor="name" className="text-xl text-gray-200">Name:</label>
        <input type="text" id="name" placeholder="John Smith" className="p-2 ml-5 bg-gray-300 rounded-full" required />
      </div>
      <div className="flex items-center justify-center m-5">
        <label htmlFor="email" className="text-xl text-gray-200">Email:</label>
        <input type="email" id="email" placeholder="john@smith.com" className="p-2 ml-5 text-left bg-gray-300 rounded-full radius" required />
      </div>
      <div className="flex items-center justify-center p-5">
        <div><label htmlFor="message" className="text-xl text-gray-200">Message:</label></div>
        <textarea placeholder="Type your message here" id="message" required className="p-2 mt-5 ml-5 bg-gray-300 border-2 rounded h-28"/>
      </div>
      <div className="flex items-center justify-center">
      <button className="w-40 p-1 m-5 text-gray-200 border-2 border-black rounded-full outline-none hover:bg-light-blue hover:text-white " type="submit">{status}</button>
      </div>
      
    </form>
   </div>
  
    </div>
  );
};

export default ContactForm;
