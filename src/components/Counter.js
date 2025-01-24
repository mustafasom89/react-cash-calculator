// Counter.js
/*
  Counter Component

  The Counter component is the main component of the Cash Balance App. It manages the state of the account balance
  using the useReducer hook and provides the necessary functions to modify the balance through various actions
  such as deposits, withdrawals, adding interest, and applying charges. 

  This component is broken down into smaller components for better reusability, readability, and maintainability.

  Components:
    - DisplayBalance: Displays the current balance.
    - DepositForm: Handles the form and logic for making a deposit.
    - WithdrawForm: Handles the form and logic for making a withdrawal.
    - ActionButtons: Contains buttons for adding interest and applying charges.

  Context:
    - AppContext: Provides the balance context to child components if needed.

  State Management:
    - useReducer: Manages the balance state with a reducer function imported from Reducer.js.

  Props and Handlers:
    - handleDeposit: Dispatches the DEPOSIT action to update the balance.
    - handleWithdraw: Dispatches the WITHDRAW action to update the balance.
    - handleAddInterest: Dispatches the ADD_INTEREST action to add interest to the balance.
    - handleCharges: Dispatches the CHARGES action to apply charges to the balance.

  Example Usage:
    <Counter />

  Dependencies:
    - React: For creating components and managing state.
    - react-bootstrap: For UI components.
    - Reducer: The reducer function that defines how state transitions occur.
    - index.css: Custom styles for the app.
    - DisplayBalance, DepositForm, WithdrawForm, ActionButtons: Child components that modularize the UI.

  Usage:
    The Counter component is used as the main interface for the Cash Balance App, allowing users to perform 
    various operations on their account balance. It integrates with various child components to ensure a clean 
    and modular structure.
*/

import { Container, Form } from "react-bootstrap";
import React, { createContext, useReducer } from "react";
import Reducer from "../Reducer/reducer";
import "../index.css";
import DisplayBalance from "./operatins/DisplayBalance";
import DepositForm from "./operatins/DepositForm";
import WithdrawForm from "./operatins/WithdrawForm";
import ActionButtons from "./operatins/ActionButtons";

const AppContext = createContext();

const reducer = Reducer;

const initialState = { balance: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance } = state;

  const handleDeposit = (amount) => {
    dispatch({ type: "DEPOSIT", payload: amount });
  };

  const handleWithdraw = (amount) => {
    dispatch({ type: "WITHDRAW", payload: amount });
  };

  const handleAddInterest = () => {
    dispatch({ type: "ADD_INTEREST" });
  };

  const handleCharges = () => {
    dispatch({ type: "CHARGES" });
  };

  return (
    <div className="prompt primary-prompt">
      <AppContext.Provider value={{ balance }}>
        <Container>
          <h1 className="text-center">Cash Balance App</h1>
          <DisplayBalance balance={balance} />
          <Form>
            <div className="prompt-buttons">
              <DepositForm onDeposit={handleDeposit} />
              <WithdrawForm onWithdraw={handleWithdraw} />
              <ActionButtons onAddInterest={handleAddInterest} onCharges={handleCharges} />
            </div>
          </Form>
        </Container>
      </AppContext.Provider>
    </div>
  );
};

export default Counter;
