import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
