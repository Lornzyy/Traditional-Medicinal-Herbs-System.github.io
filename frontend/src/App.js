import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext"

import "./App.css"
import Header from "./components/Header";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Medicine from "./pages/medicine";
import SignIn from "./pages/Login";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/medicine" element={<Medicine/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/searchResults" element={<Search/>}/>
        </Routes>
        </div>

      </AuthContextProvider>
    </div>
    
  );
}

export default App;
