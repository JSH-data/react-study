import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function useTheme() {
  const state = useContext(ThemeContext);
  if (!state) {
    throw new Error("Cannot find Provider");
  } else {
    return state;
  }
}

export default useTheme;
