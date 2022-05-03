import { Routes, Route } from "react-router-dom";
import PortalPage from "./pages/PortalPage";
import UseStatePage from "./pages/UseStatePage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<PortalPage />} />
      <Route path="/useState" element={<UseStatePage />} />
    </Routes>
  );
}

export default App;
