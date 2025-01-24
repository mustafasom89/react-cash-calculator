// DepositForm.js
/*
  DepositForm Component

  The DepositForm component provides a form for users to input the amount they want to deposit.
  It consists of an input field for entering the deposit amount and a button to submit the deposit.

  Props:
    - onDeposit: A callback function to be executed when the deposit is submitted. It receives the deposit amount as an argument.

  State:
    - depositAmount: Stores the current value entered by the user in the deposit input field.

  Handlers:
    - handleDeposit: Validates the input amount, calls the onDeposit function with the validated amount, and resets the input field.

  Dependencies:
    - React: For creating the component.
    - react-bootstrap: For the FormControl component.
    - CustomButton: A custom button component used for the deposit button.
    - index.css: Custom styles for the component.

  Custom Styles:
    - The className "custom-form-control" can be used to apply additional custom styles defined in the CSS file.

  Example Usage:
    <DepositForm onDeposit={handleDeposit} />

  This component provides a user-friendly interface for depositing money into the account.
*/

import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import CustomButton from "./CustomButton";


const DepositForm = ({ onDeposit }) => {
  const [depositAmount, setDepositAmount] = useState("");

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (!isNaN(amount)) {
      onDeposit(amount);
      setDepositAmount("");
    } else {
      alert("Empty deposit amount is not allowed");
    }
  };
  

  return (
    <div>
      <FormControl
        type="number"
        className="custom-form-control"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        placeholder="Enter deposit amount"
      />
      <CustomButton onClick={handleDeposit}>Deposit</CustomButton>
    </div>
  );
};

export default DepositForm;
