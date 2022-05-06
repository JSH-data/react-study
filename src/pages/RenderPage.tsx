// import * as ReactDOM from "react-dom/client";
import notiUtils from "../utils/notiUtils";

function RenderPage() {
  return (
    <div>
      <button
        onClick={() => {
          notiUtils(<span>반갑습니다.</span>);
        }}
      >
        알림 생성기
      </button>
    </div>
  );
}

export default RenderPage;
