import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#222", color: "white" }}>
      <h2>My React Website</h2>

      <div>
        <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "15px", color: "white" }}>About</Link>
        <Link to="/contact" style={{ color: "white" }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;