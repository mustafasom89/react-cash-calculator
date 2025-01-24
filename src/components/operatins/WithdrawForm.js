// WithdrawForm.js
/*
  WithdrawForm Component

  The WithdrawForm component provides a form for users to input the amount they want to withdraw.
  It consists of an input field for entering the withdrawal amount and a button to submit the withdrawal.

  Props:
    - onWithdraw: A callback function to be executed when the withdrawal is submitted. It receives the withdrawal amount as an argument.

  State:
    - withdrawAmount: Stores the current value entered by the user in the withdrawal input field.

  Handlers:
    - handleWithdraw: Validates the input amount, calls the onWithdraw function with the validated amount, and resets the input field.

  Dependencies:
    - React: For creating the component.
    - react-bootstrap: For the FormControl component.
    - CustomButton: A custom button component used for the withdrawal button.

  Example Usage:
    <WithdrawForm onWithdraw={handleWithdraw} />

  This component provides a user-friendly interface for withdrawing money from the account.
*/

import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import CustomButton from "./CustomButton";

const WithdrawForm = ({ onWithdraw }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (!isNaN(amount) && amount > 0) {
      onWithdraw(amount);
      setWithdrawAmount("");
    } else {
      if (isNaN(amount)) {
        alert("Invalid withdrawal amount");
      } else {
        alert("Withdrawal amount must be greater than zero");
      }
    }
  };
  

  return (
    <div>
      <FormControl
        type="number"
        className="custom-form-control"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Enter withdrawal amount"
      />
      <CustomButton onClick={handleWithdraw}>Withdraw</CustomButton>
    </div>
  );
};

export default WithdrawForm;
