import { Routes, Route } from "react-router-dom";
import PortalPage from "./pages/PortalPage";
import UseStatePage from "./pages/UseStatePage";
import UseRefPage from "./pages/UseRefPage";
import UseContextPage from "./pages/UseContextPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import RenderPage from "./pages/RenderPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<PortalPage />} />
      <Route path="/useState" element={<UseStatePage />} />
      <Route path="/useRef" element={<UseRefPage />} />
      <Route path="/useContext" element={<UseContextPage />} />
      <Route path="/useMemo" element={<UseMemoPage />} />
      <Route path="/useCallback" element={<UseCallbackPage />} />
      <Route path="/render" element={<RenderPage />} />
    </Routes>
  );
}

export default App;
