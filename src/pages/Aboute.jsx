import React from "react";

const Aboute = () => {
  // Function to handle the "Learn More" button click
  const handleLearnMore = () => {
    window.location.href = "https://developer.chapa.co/dashboard/quick-start"; // Redirect to the Chapa quick start page
  };

  return (
    <div
      id="about"
      className="bg-green-200 h-screen flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Chapa is a payment gateway service in Ethiopia that allows businesses
          to accept payments online through various channels such as
          credit/debit cards, mobile wallets, and bank transfers. It provides
          developers with an API to integrate payments into websites or mobile
          applications.
        </p>
        <div className="mt-8 text-center">
          <button
            onClick={handleLearnMore}
            className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboute;
