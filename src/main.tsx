import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.scss";
import ModalProvider from "./providers/ModalProvider";

const element = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(element).render(
  <ModalProvider>
    <App />
  </ModalProvider>
);