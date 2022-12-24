import { FC, useState } from "react";
import { deposite, withdraw } from "./slice/bankSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

/**
 * Thease are the constant values alwayes move thease kind of value to constant file
 */
let DEPOSITE = "deposite";
let WITHDRAW = "withdraw";

const App: FC = () => {
  //this is dispatch hook that will dispatch an action
  const dispatch = useAppDispatch();
  //this is selector hook that will select all state from store
  const moneyInBank = useAppSelector((state) => state.money);
  //local state for handle input field
  const [money, setMoney] = useState<number>(0);
  //handle submit button whether to deposite or withdraw
  const handleSubmit = (type: string) => {
    if (type === DEPOSITE) {
      //dispacting a deposite action with payload(money)
      dispatch(deposite(money));
    }
    if (type === WITHDRAW) {
      //dispacting a withdraw action with payload(money)
      dispatch(withdraw(money));
    }
    // setting input money to 0 so that input field get back to 0
    setMoney(0);
  };

  /**
   * below is JSX that will show on UI
   */
  return (
    <div className="app">
      <h4>Money in your bank is: {moneyInBank}</h4>
      <div className="inputContainer">
        <input
          onChange={(e) => {
            let money = e.target.value;
            if (Number(money)) {
              setMoney(Number(money));
            }
          }}
          value={money}
        />
      </div>
      <div className="buttonContainer">
        <button onClick={() => handleSubmit(DEPOSITE)}>Deposite Money</button>
        <button onClick={() => handleSubmit(WITHDRAW)}>Withdraw Money</button>
      </div>
    </div>
  );
};

export default App;
