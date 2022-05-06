import styled from "styled-components";

type TestDivType = {
  isDark: boolean;
};

export const TestDiv = styled.div<TestDivType>`
  width: 300px;
  height: 100px;
  color: ${(props) => (props.isDark ? "white" : "black")};
  background-color: ${(props) => (props.isDark ? "black" : "white")};
`;

export const NotiDiv = styled.div`
  display: flex;
  border: 1px solid #e6e6e6;
  background-color: red;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  min-width: 360px;
  z-index: 2;
`;
