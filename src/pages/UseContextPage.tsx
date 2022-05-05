import { useState } from "react";
import ThemeContext from "../context/ThemeContext";
import TestContainer from "../components/item/TestContainer";

function UseContextPage() {
  const [isDark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setDark }}>
      <TestContainer />
    </ThemeContext.Provider>
  );
}

export default UseContextPage;
