import useTheme from "../../hooks/useTheme";
import { TestDiv } from "../../styles/Item";

function TestComponent() {
  const { isDark, setDark } = useTheme();

  return (
    <TestDiv isDark={isDark}>
      테스트 컴포넌트 입니다.{" "}
      <button
        onClick={() => {
          setDark(!isDark);
        }}
      >
        테마 변경
      </button>
    </TestDiv>
  );
}

export default TestComponent;
