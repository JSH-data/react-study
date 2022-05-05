import { useEffect, useState } from "react";

type createBoxStyleType = {
  backgroundColor: string;
  width: string;
  height: string;
};

function CallbackBox({
  createBoxStyle,
}: {
  createBoxStyle: () => createBoxStyleType;
}) {
  const [style, setStyle] = useState({
    backgroundColor: "",
    width: "",
    height: "",
  });

  useEffect(() => {
    console.log("박스 키우자"); // 부모의 배경색상을 변경할때마다 createBoxStyle이 재실행되어 호출되는 현상
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
}

export default CallbackBox;
