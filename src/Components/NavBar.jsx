import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "..//Styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>One-Stop Sandwich Shop</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        {/* <Link to="/checkout">Checkout</Link> */}
        <Link to="/about">About</Link>
        {/* <Link to="/cart">Cart</Link> */}
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
