import { useAuth0 } from "@auth0/auth0-react";
import "../css/navbar.css";

function NavBar() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(isAuthenticated);
  if (isAuthenticated && user) {
    return (
      <div className="navWrapper">
        <nav className="nav">
          <div className="navbar-left">Astrapply</div>

          <div className="middleDiv">Welcome, {user.username}</div>

          <div className="navbar-right">
            <button onClick={() => loginWithRedirect()}>Log in</button>
            <button onClick={() => logout()}>Log Out</button>
          </div>
        </nav>
      </div>
    );
  }
  return (
    <div className="navWrapper">
      <nav className="nav">
        <div className="navbar-left">Astrapply</div>

        <div className="navbar-right">
          <button onClick={() => loginWithRedirect()}>Log in</button>
          <button onClick={() => logout()}>Log Out</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
