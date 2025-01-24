export default function reducer(state, action) {
  switch (action.type) {
    case "DEPOSIT":
      /*If the Deposit button is clicked, the balance amount should increase by the input value from the input box. */
      return { ...state, balance: state.balance + action.payload };
    case "WITHDRAW":
      /*
        >>
        avoid underbalance request, and accept only the amount with same balance or less than 
        >>
        If the Withdraw button is clicked, the balance amount should decrease by the input value from the input box.*/
      if (state.balance >= action.payload) {
        return { ...state, balance: state.balance - action.payload };
      }
      return state;
    case "ADD_INTEREST":
      /*If the Add Interest button is clicked, the balance amount should increase by 5%. */
      return { ...state, balance: state.balance * 1.05 };
    case "CHARGES":
      /*If the Charges button is clicked, the balance amount should decrease by 15%. */
      return { ...state, balance: state.balance * 0.85 };
    default:
      return state;
  }
}
