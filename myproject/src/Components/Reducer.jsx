import { useReducer } from "react";
// Import the useReducer hook from React

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return state - action.payload;
    // Subtracts the payload amount from the current state (balance) on "WITHDRAW" action

    case "DEPOSIT":
      return state + action.payload;
    // Adds the payload amount to the current state (balance) on "DEPOSIT" action

    default:
      return state;
    // Returns the current state if the action type doesn't match any case
  }
};
// Defines a reducer function to handle balance updates based on the action type

function Reducer() {
  const withDraw = (amount) => {
    dispatch({ type: "WITHDRAW", payload: amount });
  };
  // Defines the withDraw function to dispatch a "WITHDRAW" action with a specified amount

  const deposit = (amount) => {
    dispatch({ type: "DEPOSIT", payload: amount });
  };
  // Defines the deposit function to dispatch a "DEPOSIT" action with a specified amount

  const balane = 1000;
  // Initializes the starting balance as 1000

  const [state, dispatch] = useReducer(transactionReducer, balane);
  // Uses the useReducer hook to manage the state (balance) with transactionReducer and initial balance

  return (
    <>
      <div className="text-center mt-4 text-danger h3">Reducer</div>
      {/* Displays the title "Reducer" in a styled div */}

      <div className="h4 text-center mt-3 text-primary">
        {`Balance = ${state}`}
      </div>
      {/* Displays the current balance, which is stored in the state variable */}


    <div className="text-center">

    <button
        className="btn btn-lg btn-dark mt-3 me-4 "
        onClick={() => withDraw(500)}
      >
        Withdraw
      </button>
      {/* Button to withdraw 500 from the balance, triggers withDraw function */}

      <button
        className="btn btn-lg btn-success mt-3 "
        onClick={() => deposit(500)}
      >
        Deposit
      </button>
      {/* Button to deposit 500 to the balance, triggers deposit function */}

    </div>
      
    </>
  );
  // Renders the UI components with buttons to trigger deposit and withdraw actions
}

export default Reducer;
// Exports the Reducer component as the default export
