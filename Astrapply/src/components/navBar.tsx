import { useAuth0 } from "@auth0/auth0-react";
import "../css/navbar.css";
import menu from "../assets/menuIcon.png";
import logo from "../assets/atrapplyLogoWhite.png";
import defaultPfp from "../assets/loginAvatar copy.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RefObject, useRef } from "react";
function NavBar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);

  const handleToggle = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: Event) => {
    const targetNode = event.target as Node;

    if (dropdownRef.current && !dropdownRef.current.contains(targetNode)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  console.log(isAuthenticated);
  console.log(user);
  if (isAuthenticated && user) {
    return (
      <div className="navWrapper">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="navbar-left">
            <img className="navLogo" src={logo} />
            <p>strapply</p>
          </div>
        </Link>

        <div className="middleDiv">Welcome, {user.given_name}</div>

        <div
          className={`navbar-right ${isOpen ? "shadow" : ""}`}
          ref={dropdownRef}
          onClick={handleToggle}
        >
          <img className="menuIcon" src={menu} />
          <img className="pfp" src={user.picture} />
        </div>
        <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
          <Link to={"/account"}>Account</Link>
          <Link to={"/dash"}>DashBoard</Link>
          <a href="#" onClick={() => logout()}>
            Logout
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="navWrapper">
      <div className="navbar-left">
        <img className="navLogo" src={logo} />
        <p>strapply</p>
      </div>

      <div
        className={`navbar-right ${isOpen ? "shadow" : ""}`}
        ref={dropdownRef}
        onClick={handleToggle}
      >
        <img className="menuIcon" src={menu} />
        <img className="pfp" src={defaultPfp} />
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        <Link to={"/account"}>Account</Link>
        <a href="#" onClick={() => loginWithRedirect()}>
          Sign in
        </a>
      </div>
    </div>
  );
}

export default NavBar;
