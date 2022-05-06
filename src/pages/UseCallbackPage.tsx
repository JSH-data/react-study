import { useState, useCallback } from "react";
import CallbackBox from "../components/item/CallbackBox";

function UseCallbackPage() {
  const [size, setSize] = useState(100);
  const [isDark, setDark] = useState(false);
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);
  // useCallback을 사용하여 다크 모드 변경시에도 createBoxStyle이 새롭게 만들어지지 않습니다
  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={() => {
          setSize(size + 1);
        }}
      />
      <button onClick={() => setDark(!isDark)}>Change Color</button>
      <CallbackBox createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default UseCallbackPage;
