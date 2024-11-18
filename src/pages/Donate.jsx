import React, { useState } from "react";
import Pay from "../components/Pay";

const Donate = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(50);
  const tx_ref =`${fname}-tx-11182024`;
  const public_key = "CHAPUBK_TEST-UUSw97AQFt7fbU7Mbah01s4q7A9kGRpr";

  // Handle input changes
  const handleFnameChange = (e) => {
    setFname(e.target.value);
    console.log(e.target.value); // Log immediately after change
  };

  const handleLnameChange = (e) => {
    setLname(e.target.value);
    console.log(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div
      id="donate"
      className="bg-green-200 h-screen flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Donate
        </h2>

        <div className="space-y-4">
          <input
            onChange={handleFnameChange}
            type="text"
            value={fname}
            className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="First Name"
          />
          <input
            onChange={handleLnameChange}
            type="text"
            value={lname}
            className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Last Name"
          />
          <input
            onChange={handleEmailChange}
            type="email"
            value={email}
            className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email"
          />
          <input
            onChange={handleAmountChange}
            type="number"
            value={amount}
            className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Amount"
          />
        </div>

        <div className="mt-6 text-center">
          <Pay
            fname={fname}
            lname={lname}
            email={email}
            amount={amount}
            tx_ref={tx_ref}
            public_key={public_key}
          />
        </div>
      </div>
    </div>
  );
};

export default Donate;
