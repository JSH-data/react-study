import { ReactNode } from "react";
import { ModalBackground } from "../../styles/Modal";

function Background({
  children,
  closePortal,
}: {
  children: ReactNode;
  closePortal: () => void;
}) {
  return (
    <>
      <ModalBackground onClick={closePortal} />
      {children}
    </>
  );
}

export default Background;
