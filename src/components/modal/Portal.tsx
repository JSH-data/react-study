import { ReactNode, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Background from "./Background";

function Portal({
  children,
  closePortal,
}: {
  children: ReactNode;
  closePortal: () => void;
}) {
  const modalRef = useRef<HTMLElement>(document.getElementById("modal"));

  const closeEvent = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "close") closePortal();
  };

  const initEvent = useCallback(() => {
    if (modalRef && modalRef.current) {
      modalRef.current.addEventListener("click", closeEvent);
    }
  }, []);

  useEffect(() => {
    initEvent();
  }, []);

  if (modalRef.current !== null) {
    return createPortal(
      <Background closePortal={closePortal}>{children}</Background>,
      modalRef.current
    );
  }
  return null;
}

export default Portal;
