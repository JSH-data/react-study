import { Nav } from "../../styles/Layout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/portal">portal</Link>
      <Link to="/useState">useState</Link>
      <Link to="/useRef">useRef</Link>
      <Link to="/useContext">useContext</Link>
    </Nav>
  );
};

export default Navbar;
