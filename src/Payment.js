import React, { useState } from 'react';

const Payment = ({ totalCost, handlePaymentSuccess }) => {
  const [mobileNumber, setMobileNumber] = useState('');
 

  const handlePayment = () => {
    //Payment processing logic her
    setTimeout(() => {
      alert('Payment successful!');
      handlePaymentSuccess();
    }, 1000);
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <div>
        <label htmlFor="mobileNumberInput">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumberInput"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Checkout</button>
      <p>Total Cost: Ksh {totalCost}</p>
    </div>
  );
};

export default Payment;
