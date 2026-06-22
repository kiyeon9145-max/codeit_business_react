import { useState } from "react";

const CounterScreen = () => {
  // let number = 0;
  const [number, setNumber] = useState(0);
  const onClickButton = () => {
    // number += 1;
    setNumber((prev) => {
      return prev + 1;
    });
  };
  return (
    <div>
      <h1>덧셈 카운터</h1>
      <h1>{number}</h1>
      <button onClick={onClickButton}>누르면 1 증가합니다.</button>
    </div>
  );
};

export default CounterScreen;
