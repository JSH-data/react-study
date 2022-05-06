import { ReactNode, useEffect } from "react";
import { NotiDiv } from "../../styles/Item";

function Notification({
  children,
  close,
}: {
  children: ReactNode;
  close: () => void;
}) {
  // 해당 hooks는 18버전 이후에서 쓰입니다.
  useEffect(() => {
    setTimeout(close, 2000);
  }, []);
  return (
    <NotiDiv>
      {children}
      <span onClick={() => close()}>닫기</span>
    </NotiDiv>
  );
}

export default Notification;
