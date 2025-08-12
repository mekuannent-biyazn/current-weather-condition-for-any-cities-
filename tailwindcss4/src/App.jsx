import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./wheather/weather";

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Weather />
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
