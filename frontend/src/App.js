import React from "react";
import Header from "./components/Header";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Medicine from "./pages/medicine";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

import "./App.css"
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/medicine" element={<Medicine/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/searchResult" element={<Search/>}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;
