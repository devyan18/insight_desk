import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.scss";
import ModalProvider from "./providers/ModalProvider";
import { Auth0Provider } from "@auth0/auth0-react";

const element = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(element).render(
  <Auth0Provider
    domain="dev-brghqz7vudwqnre1.us.auth0.com"
    clientId="1Y9tjO1X2GSroLlzGuBit16IWaPTUYqp"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ModalProvider>
      <App />
    </ModalProvider>
  </Auth0Provider>
);
