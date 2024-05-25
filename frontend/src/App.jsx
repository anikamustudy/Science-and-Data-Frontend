import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
