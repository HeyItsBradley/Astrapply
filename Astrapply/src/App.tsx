import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log in</button>
      <button onClick={() => logout()}>Log Out</button>
    </>
  );
}

export default App;
