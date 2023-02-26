import React from "react";

const CounterButton = ({
  increase,
  decrease,
  counter,
  btnDisabled,
  isDisabled,
}) => {
  return (
    <div className="counter-container">
      <div className="counter">
        <button
          className="counter-btn minus"
          type="button"
          aria-label="수량빼기버튼"
          disabled={btnDisabled}
          onClick={decrease}
          style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
        >
          -
        </button>
        <span className="a11y">수량</span>
        <span className="counter-value">{counter}</span>
        <span className="a11y">개</span>
        <button
          className="counter-btn plus"
          type="button"
          aria-label="수량더하기버튼"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
