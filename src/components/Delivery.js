import React from "react";

const Delivery = () => {
  return (
    <div className="delivery-container">
      <div className="delivery-box">
        <span className="delivery-method">택배배송</span>
        <span className="delivery-charge">
          3,000<span>원</span>
        </span>
        <span className="payment-way">(주문시 결제)</span>
      </div>
      <div>
        <span className="cost-quantity">10개마다 부과</span>
      </div>
    </div>
  );
};

export default Delivery;
