import { ChangeEvent, useState } from "react";

const initValueFunction = () => {
  return ["초기", "데이터", "삽입 작업이", "무겁다면", "이렇게!"];
  // 안그럼 랜더링 시간마다 계속 초기값 삽입 함수가 실행될 수 있습니다~
};

const UseStatePage = () => {
  const [state, setState] = useState<Array<string>>(() => {
    return initValueFunction();
    // 첫 로딩에서 단 1번 실행됩니다!
  });
  const [text, setText] = useState<string>("");

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const buttonHandler = () => {
    setState([...state, text]);
    setText("");
  };

  return (
    <>
      <input type="text" value={text} onChange={inputHandler} />
      <button onClick={buttonHandler}>업로드</button>
      {state.map((v) => (
        <div>{v}</div>
      ))}
    </>
  );
};

export default UseStatePage;
