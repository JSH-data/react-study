import { Nav } from "../../styles/Layout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/portal">portal</Link>
      <Link to="/useState">useState</Link>
      <Link to="/useRef">useRef</Link>
      <Link to="/useContext">useContext</Link>
      <Link to="/useMemo">useMemo</Link>
      <Link to="/useCallback">useCallback</Link>
      <Link to="/render">render</Link>
    </Nav>
  );
};

export default Navbar;
