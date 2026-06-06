import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Connect from "./Components/Connect/Connect";
import Internship from "./Components/Internship/Internship";
import BubblesBackground from "./Components/Bubbles/bubbles.jsx";

function App() {
  return (
    <Router>
      <BubblesBackground />
      <Nav />

      <Routes>
       
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Internship/> 
              <Contact />
              <Connect />
            </>
          }
        />

        
        <Route path="/internships" element={<Internship />} />
      </Routes>
    </Router>
  );
}

export default App;
