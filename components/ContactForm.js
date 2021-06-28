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
   <div className="bg-light-blue">
   <form onSubmit={handleSubmit}>
      <div className="m-5 ">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="John Smith" className="p-2 ml-5 rounded-full" required />
      </div>
      <div className="m-5">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="john@smith.com" className="p-2 ml-5 text-left rounded-full radius" required />
      </div>
      <div className="p-5 ">
        <div><label htmlFor="message">Message:</label></div>
        <textarea placeholder="Type your message here" id="message" required className="h-32 p-2 mt-5 ml-5 border-2 rounded"/>
      </div>
      <div className="flex items-center justify-center">
      <button className="p-1 m-5 border-2 rounded-full outline-none border-dark-blue hover:bg-dark-blue hover:text-white" type="submit">{status}</button>
      </div>
      
    </form>
   </div>
  
    </div>
  );
};

export default ContactForm;
