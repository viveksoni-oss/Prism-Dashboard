import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/login/AuthContext.jsx"; // <-- import the provider

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
        <App />
    </StrictMode>
  </BrowserRouter>
);
