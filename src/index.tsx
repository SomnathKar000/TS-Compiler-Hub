import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CodeContextProvider } from "./contexts/code-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CodeContextProvider>
      <App />
    </CodeContextProvider>
  </React.StrictMode>
);
