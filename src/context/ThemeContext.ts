import { createContext, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
  isDark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
// 초기 값으로 Provider를 감싸지 않은 경우(value 값이 지정되지 않은 경우 useContext로 불러올 수 있는 값 입니다.)

export default ThemeContext;
