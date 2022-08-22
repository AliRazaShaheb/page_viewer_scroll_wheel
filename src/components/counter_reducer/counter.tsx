import { EventHandler, useReducer, useState } from "react";

// export actions ={
//   INCREMENT:
// }
interface InitialStateTypes {
  counter: number;
}

const initialState = {
  counter: 0
};

const reducer = (state: InitialStateTypes, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter === 0 ? 0 : state.counter - 1
      };
    case "INCREMENT5":
      return {
        ...state,
        counter: state.counter + 5
      };
    case "DECREMENT5":
      return {
        ...state,
        counter: state.counter === 0 ? 0 : state.counter - 5
      };
    case "RESET":
      return {
        ...state,
        counter: 0
      };
    case "ADD":
      return {
        ...state,
        counter: isNaN(payload) ? 0 : state.counter + payload
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const increment5 = () => dispatch({ type: "INCREMENT5" });
  const decrement5 = () => dispatch({ type: "DECREMENT5" });
  const add = () => {
    dispatch({ type: "ADD", payload: parseInt(input) });
    setInput("");
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const el = e.target;
    setInput(el.value);
  };
  return (
    <div>
      <h1>{state.counter}</h1>
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5px"
        }}
      >
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={increment5}>5+</button>
        <button onClick={decrement5}>5-</button>
        <button onClick={reset}>reset</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px"
        }}
      >
        <input
          value={input}
          type="text"
          style={{ width: "54%" }}
          onChange={handleInput}
        />
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
