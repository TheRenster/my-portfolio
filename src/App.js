import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center">Lauren Knox</h1>
        <p className="text-gray-600 text-center mt-2">Economics | Data Analytics | Finance</p>
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-gray-700 mt-2">
            I am a senior at Utah State University, triple majoring in Economics, Data Analytics, and Finance. I have research experience with CGO and data analytics experience at Lamb Weston. My interests include consulting, entrepreneurship, and economic policy.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="mt-2 space-y-2">
            <li className="bg-gray-200 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">WaterRightsToken</h3>
              <p className="text-gray-700">A blockchain-based tokenization project for water rights management.</p>
            </li>
            <li className="bg-gray-200 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">NYC Property Sale Analysis</h3>
              <p className="text-gray-700">Developed a predictive model to minimize RMSE in property valuation.</p>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Resume</h2>
          <a href="/resume.pdf" download className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">Download Resume</a>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Contact Me</h2>
          <form className="mt-2 bg-gray-200 p-4 rounded-lg shadow">
            <label className="block text-gray-700">Name:</label>
            <input type="text" className="w-full p-2 rounded-lg mt-1" placeholder="Your Name" />
            
            <label className="block text-gray-700 mt-2">Email:</label>
            <input type="email" className="w-full p-2 rounded-lg mt-1" placeholder="Your Email" />
            
            <label className="block text-gray-700 mt-2">Message:</label>
            <textarea className="w-full p-2 rounded-lg mt-1" placeholder="Your Message"></textarea>
            
            <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;