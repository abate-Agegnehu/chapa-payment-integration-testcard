import React from 'react'

const Pay = ({ fname, lname, email, amount, tx_ref, public_key }) => {
  return (
    <div>
      <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
        <input type="hidden" name="public_key" value={public_key} />
        <input type="hidden" name={tx_ref} value="negade-tx-12345678sss9" />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="first_name" value={fname} />
        <input type="hidden" name="last_name" value={lname} />
        <input type="hidden" name="title" value="Let us do this" />
        <input
          type="hidden"
          name="description"
          value="Paying with Confidence with cha"
        />
        <input
          type="hidden"
          name="logo"
          value="https://chapa.link/asset/images/chapa_swirl.svg"
        />
        <input
          type="hidden"
          name="callback_url"
          value="http://localhost:5173/#tnx"
        />
        <input
          type="hidden"
          name="return_url"
          value="http://localhost:5173/#tnx"
        />
        <input type="hidden" name="meta[title]" value="test" />
        <button type="submit" className="bg-purple-200 px-4 py-2 rounded">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default Pay
