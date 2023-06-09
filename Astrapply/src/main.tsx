import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain="dev-axmubii7uwlx3bez.us.auth0.com"
    clientId="V6jIlSje7YT00p1aGiDez0sL7ZUV0qWN"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/dash",
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
