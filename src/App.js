import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./routes/routes";
import { AuthProvider } from "./context/index";

function App() {
  return (
    <Router>
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
