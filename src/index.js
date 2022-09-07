import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authProvider";
import { ElectionProvider } from "./context/electionProvider";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ElectionProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ElectionProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
