import React from "react";

const Total = ({ counter, totalPrice }) => {
  return (
    <div className="total-container">
      <div className="total-left">
        <span className="total-title">총 상품 금액</span>
        <button className="help-btn" type="button" aria-label="도움말버튼">
          ?
        </button>
      </div>
      <div className="total-right">
        <span className="total-quantity">총 수량 {counter}개</span>
        <span className="total-price">
          {totalPrice} <span>원</span>
        </span>
      </div>
    </div>
  );
};

export default Total;
