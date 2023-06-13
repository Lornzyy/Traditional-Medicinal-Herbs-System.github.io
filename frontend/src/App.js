import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Medicine from "./pages/medicine";
import Register from "./pages/Register";
import SignIn from "./pages/Login";
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
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/searchResults" element={<Search/>}/>
        </Routes>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
