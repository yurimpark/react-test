import React from "react";
const PurchaseButton = ({ isDisabled }) => {
  return (
    <div>
      <button
        type="button"
        aria-label="구매하기버튼"
        className={isDisabled ? "purchase-btn-disabled" : "purchase-btn"}
      >
        구매하기
      </button>
    </div>
  );
};

export default PurchaseButton;
