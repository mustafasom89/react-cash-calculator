// ActionButtons.js
/*
  ActionButtons Component

  This component renders two buttons: one for adding interest and another for applying charges.
  The buttons utilize the reusable CustomButton component, which ensures a consistent appearance and behavior.

  Props:
    - onAddInterest: A callback function to be executed when the "Add Interest (5%)" button is clicked.
    - onCharges: A callback function to be executed when the "Charges (15%)" button is clicked.

  Usage:
    This component is used within the Counter component to provide user actions for modifying the account balance
    by either adding interest or applying charges.

  Example:
    <ActionButtons onAddInterest={handleAddInterest} onCharges={handleCharges} />

  Dependencies:
    - CustomButton: A reusable button component that handles the rendering of the button with consistent styles.
*/

import React from "react";
import CustomButton from "./CustomButton";

const ActionButtons = ({ onAddInterest, onCharges }) => {
  return (
    <div>
      <CustomButton onClick={onAddInterest}>Add Interest (5%)</CustomButton>
      <CustomButton onClick={onCharges}>Charges (15%)</CustomButton>
    </div>
  );
};

export default ActionButtons;
