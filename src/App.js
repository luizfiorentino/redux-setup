// import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  // const [balance, setBalance] = useState(0);
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          /*setBalance(balance + 10);*/
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
    </div>
  );
}

export default App;
