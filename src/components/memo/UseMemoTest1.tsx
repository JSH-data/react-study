import { useState, useMemo, ChangeEvent } from "react";

const hardCal = (hardNum: number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999; i++) {}
  return hardNum + 10000;
};

const easyCal = (easyNum: number) => {
  console.log("쉬운 계산");
  return easyNum + 1;
};

// 위 두 계산은 어떤 하나의 계산을 실행하더라도 동시에 같이 호출됨
// 함수를 호출하는 방식을 취하는 함수 컴포넌트의 특성 상 리랜더링은 함수의 호출을 의미합니다.

function UseMemoTest1() {
  const [easyNum, setEasyNum] = useState(1);
  const [hardNum, sethardNum] = useState(1);

  const hardResult = useMemo(() => hardCal(hardNum), [hardNum]);

  const easyResult = useMemo(() => easyCal(easyNum), [easyNum]);

  const hardHandler = (event: ChangeEvent<HTMLInputElement>) => {
    sethardNum(hardNum + 1);
  };
  const easyHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEasyNum(easyNum + 1);
  };

  return (
    <div>
      <label htmlFor="hard">어려운 계산기</label>
      <input type="number" name="hard" value={hardNum} onChange={hardHandler} />
      <span> + 10000 = {hardResult}</span>
      <br></br>
      <label htmlFor="easy">어려운 계산기</label>
      <input type="number" name="easy" value={easyNum} onChange={easyHandler} />
      <span> + 1 = {easyResult}</span>
    </div>
  );
}

export default UseMemoTest1;
