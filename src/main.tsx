import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>
);
