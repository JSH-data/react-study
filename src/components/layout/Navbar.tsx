import { Nav } from "../../styles/Layout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/portal">portal</Link>
      <Link to="/useState">useState</Link>
    </Nav>
  );
};

export default Navbar;
