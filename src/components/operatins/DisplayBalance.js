// DisplayBalance.js
/*
  DisplayBalance Component

  The DisplayBalance component renders the current balance of the account.
  It receives the balance as props and displays it with a fixed decimal precision.

  Props:
    - balance: The current balance of the account, passed from the parent component.

  Example Usage:
    <DisplayBalance balance={currentBalance} />

  Dependencies:
    - React: For creating the component.

  This component provides a simple and clear representation of the account balance.
*/

import React from "react";

const DisplayBalance = ({ balance }) => {
  return (
    <h2 className="prompt primary-prompt">Balance: ${balance.toFixed(2)}</h2>
  );
};

export default DisplayBalance;
