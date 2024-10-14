import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./Context/ThemeContext";
import Main from "./Pages/Main";

function RoutesComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;
