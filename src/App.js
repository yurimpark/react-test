import React, { useState } from "react";
import "./style.css";
import {
  CounterButton,
  Delivery,
  Product,
  PurchaseButton,
  Total,
} from "./components";

//* 유의사항
// 스크린리더 사용자가 정보를 올바르게 이해할 수 있도록 구성
//* 기능
// 상품 갯수를 늘리거나 줄일 수 있다. (카운트 값이 증가하면 총 수량 및 가격이 업데이트 되어 ui에 반영)
// 제품 갯수가 0이면 구매하기 버튼이 비활성화(disable) 된다.
// 구매하기 버튼에 마우스를 올리면 호버 상태(진한색)로 변경된다.
//todo 도움말 버튼을 클릭하면 툴팁이 표시된다.
//todo 유연한 레이아웃(반응형)

export default function App() {
  const [counter, setCounter] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const productPrice = 6370;
  let totalPrice = (counter * productPrice).toLocaleString();

  const increase = () => {
    setCounter(counter + 1);
    setBtnDisabled(false);
  };

  const decrease = () => {
    setCounter(counter - 1);
    if (counter === 1) {
      setBtnDisabled(true);
    }
  };

  const isDisabled = counter === 0;

  return (
    <div className="viewport">
      <Product />
      <Delivery />
      <CounterButton
        increase={increase}
        decrease={decrease}
        counter={counter}
        btnDisabled={btnDisabled}
        isDisabled={isDisabled}
      />
      <Total
        counter={counter}
        productPrice={productPrice}
        totalPrice={totalPrice}
      />
      <PurchaseButton isDisabled={isDisabled} />
    </div>
  );
}
