import React from "react";

const Product = () => {
  return (
    <div className="product-container">
      <img src="img/ProductImage.svg" alt="상품이미지"></img>
      <h1 className="product-title">
        래피젠 코로나 자가 검사 키트 <br />
        2개입X1박스
      </h1>
      <div className="price-container">
        <div className="discount-rate">
          <span className="a11y">할인율</span>
          <span>88</span>
          <span>%</span>
        </div>
        <div className="price">
          <div className="price-origin">
            <span className="a11y">정상가</span>
            <span>56,760</span>
            <span>원</span>
          </div>
          <div className="price-sale">
            <span className="a11y">할인판매가</span>
            <span>6,370</span>
            <span>원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
