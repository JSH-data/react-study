import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 100px;
  background-color: white;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
