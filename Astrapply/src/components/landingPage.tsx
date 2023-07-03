import "../css/landingPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import wave from "../assets/wave.svg";

function LandingPage() {
  const { loginWithRedirect } = useAuth0();
  const signUp = () =>
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  return (
    <>
      <div
        className="landingContainer"
      >
        <section className="landingLeft">
          <span className="landingHeader">Welcome</span>
          <span className="landingHeader">to</span>
          <span className="landingHeader">Astrapply</span>
          <span className="landingSpan">The future of applying</span>
        </section>
        <section className="landingRight">
          <button onClick={() => loginWithRedirect()} className="landingButton">
            Login
          </button>
          <p className="landingOr">or</p>
          <button onClick={signUp} className="landingButton">
            Sign up
          </button>
        </section>
      </div>
    </>
  );
}
export default LandingPage;
