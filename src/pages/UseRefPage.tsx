import { useRef, useState } from "react";

function UseRefPage() {
  const countRef = useRef(0);

  // Component의 언마운트 이전까지 값을 유지할 수 있습니다.
  // ref의 값은 변경되어도 렌더링을 일으키지 않습니다.
  // 변화는 감지하지만 그 변화가 리렌더링을 일으키지 않는 상황에서 많이 쓰일 수 있습니다.

  let countVar = 0;
  // 랜더링에 걸리면 초기화됨

  const [render, setRender] = useState(0);

  const increaseRef = () => {
    countRef.current += 1;
    console.log("ref", countRef.current);
  };
  const increaseVar = () => {
    countVar += 1;
    console.log("var", countVar);
  };

  return (
    <div>
      <div>refs{countRef.current}</div>
      <div>vars{countVar}</div>
      <button onClick={increaseRef}>ref Up</button>
      <button onClick={increaseVar}>var Up</button>
      <button onClick={() => setRender(render + 1)}>랜더링</button>
    </div>
  );
}

export default UseRefPage;
