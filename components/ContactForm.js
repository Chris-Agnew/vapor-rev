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
    <div
      id="contact"
      className="flex items-center justify-center h-full bg-dark-blue"
    >
      <div className="mt-1 rounded md:mt-0 bg-dark-blue">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center m-5">
            <label htmlFor="name" className="text-xl text-gray-200">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder=" John Smith"
              className="w-40 p-2 ml-5 bg-gray-300 rounded-full outline-none"
              required
            />
          </div>
          <div className="flex items-center justify-center m-5">
            <label htmlFor="email" className="text-xl text-gray-200">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder=" john@smith.com"
              className="w-40 p-2 ml-5 text-left bg-gray-300 rounded-full outline-none radius"
              required
            />
          </div>
          <div className="flex items-center justify-center w-full h-full ">
            <div>
              <label htmlFor="message" className="text-xl text-gray-200 ">
                Message:
              </label>
            </div>
            <textarea
              placeholder="Type your message here"
              id="message"
              required
              className="w-32 p-4 mt-5 ml-2 bg-gray-300 border-2 rounded outline-none h-28"
            />
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="p-1 m-5 text-gray-200 border-2 border-black rounded-full outline-none w-36 hover:bg-light-blue hover:text-white "
              type="submit"
            >
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
