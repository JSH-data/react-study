import { ChangeEvent, useState, useEffect, useMemo } from "react";

function UseMemoTest2() {
  const [number, setNumber] = useState(0);
  const [isShit, setShit] = useState(false);

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    const newNum = Number(e.currentTarget.value);
    setNumber(newNum);
  };

  //   const what = isShit ? "쌌네" : "안쌌네";
  const what = useMemo(
    () => ({ confirm: isShit ? "쌌네" : "안쌌네" }),
    [isShit]
  );

  useEffect(() => {
    console.log("랜더링 된다링");
  }, [what]);
  // what이 원시 값인 경우는 랜더링이 일어나지 않지만 객체인경우 계속해서 number값이 변하면 랜더링이 반복됩니다.
  return (
    <div>
      <h1>몇 대 맞을래?</h1>
      <input type="number" value={number} onChange={handler} />
      <hr />
      <h1>너 뭐야 똥쌌지 ㅡㅡ</h1>
      <p>{what.confirm}</p>
      <button onClick={() => setShit(!isShit)}>확인</button>
    </div>
  );
}

export default UseMemoTest2;
