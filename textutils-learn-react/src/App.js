import "./App.css";
import propTypes from "prop-types";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState("white");

  const toggleMode = () => {
    if (mode === "white") {
      setMode("grey");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <Navbar
        title="Text Changer"
        mode={mode}
        toggleMode={toggleMode}
        textChange={mode === "grey" ? "Enable LightMode" : "Enable DarkMode"}
        about="About"
        home="Home"
      />

      <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
};

Navbar.defaultProps = {
  title: "Raj Kumar",
};

export default App;
