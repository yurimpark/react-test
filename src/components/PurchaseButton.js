import React from "react";

const PurchaseButton = ({
  isHovering,
  handleMouseOver,
  handleMouseOut,
  isDisabled,
}) => {
  return (
    <div>
      <button
        className="purchase-btn"
        style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
      >
        <img
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          src={
            isDisabled
              ? "img/Disabled.svg"
              : isHovering
              ? "img/PurchaseButtonOn.svg"
              : "img/PurchaseButtonOff.svg"
          }
          alt="구매하기버튼"
        />
      </button>
    </div>
  );
};

export default PurchaseButton;
