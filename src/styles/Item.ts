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
