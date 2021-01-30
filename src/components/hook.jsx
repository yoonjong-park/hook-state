import React, { useState } from "react";

function Hook() {
  const [item, setItem] = useState(0);

  function plusItem() {
    setItem(item + 1);
  }

  function minusItem() {
    setItem(item - 1);
  }

  return (
    <>
      <div>Hello {item}</div>
      <button onClick={plusItem}>더하기</button>
      <button onClick={minusItem}>빼기</button>
    </>
  );
}

export default Hook;
