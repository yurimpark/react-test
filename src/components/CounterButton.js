import React from "react";

const CounterButton = ({ increase, decrease, counter, btnDisabled }) => {
  return (
    <div className="counter-container">
      <div className="counter">
        <button
          disabled={btnDisabled}
          className="counter-btn minus"
          onClick={decrease}
        >
          -
        </button>
        <span className="a11y">수량</span>
        <span className="counter-value">{counter}</span>
        <span className="a11y">개</span>
        <button className="counter-btn plus" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
