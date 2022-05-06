import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import Notification from "../components/item/Notification";

let container: null | HTMLDivElement = null;
// 해당 컨테이너를 계속해서 공유하기 때문에 아래서 위로 올라가듯 알람창이 쌓임

// React 18 이전 버전
// function useNotification(content: any) {
//   if (container === null) {
//     container = document.createElement("div");
//     container.style.display = "flex";
//     container.style.flexDirection = "column-reverse";
//     container.style.position = "fixed";
//     container.style.bottom = "10px";
//     container.style.right = "10px";
//     document.body.appendChild(container);
//   }

//   const com = document.createElement("div");

//   container.appendChild(com);

//   const removeNotication = () => {
//     ReactDom.unmountComponentAtNode(com);
//     if (com?.parentNode) {
//       com.parentNode.removeChild(com);
//     }
//   };

//   ReactDom.render(
//     <Notification close={removeNotication}>{content}</Notification>,
//     com,
//     () => {
//       setTimeout(removeNotication, 10000);
//     }
//   );
// }

// React 18 이후 버전
function useNotification(content: any) {
  // let container: null | HTMLDivElement = null;
  if (container === null) {
    container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column-reverse";
    container.style.position = "fixed";
    container.style.bottom = "10px";
    container.style.right = "10px";
    document.body.appendChild(container);
  }

  const com = document.createElement("div");
  container.appendChild(com);

  const noti = createRoot(com);

  const removeNotication = () => {
    noti.unmount();

    if (com?.parentNode) {
      com.parentNode.removeChild(com);
    }
  };

  noti.render(<Notification close={removeNotication}>{content}</Notification>);
}

export default useNotification;
