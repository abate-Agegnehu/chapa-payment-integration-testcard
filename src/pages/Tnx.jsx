import React from "react";

const Tnx = () => {
  // Function to handle the "Go Back Home" button click
  const handleGoBack = () => {
    window.location.href = "http://localhost:5173/#donate"; // Redirect to the donate section
  };

  return (
    <div
      id="tnx"
      className="bg-green-200 h-screen flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Thank You!
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          Your payment has been successfully processed. We appreciate your
          support and contribution to our cause. Every donation helps us
          continue our mission.
        </p>
        <div className="mt-8 text-center">
          <button
            onClick={handleGoBack}
            className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors duration-300"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tnx;
