import { useState, useCallback } from "react";
import Modal from "../components/modal/Modal";
import Portal from "../components/modal/Portal";

const PortalPage = () => {
  const [isPortal, setPortal] = useState(false);

  const closePortal = useCallback(() => {
    setPortal(false);
    document.body.style.overflow = "visible";
  }, []);

  const openPortal = useCallback(() => {
    setPortal(true);
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <button onClick={openPortal}>포털 열기</button>
      {isPortal && (
        <Portal closePortal={closePortal}>
          <Modal />
        </Portal>
      )}
    </>
  );
};

export default PortalPage;
