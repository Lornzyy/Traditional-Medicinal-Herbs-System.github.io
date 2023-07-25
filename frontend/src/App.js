import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Medicine from "./pages/medicine";
import SignIn from "./pages/Login";
import Search from "./pages/Search";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/medicine" 
            element={
              <Protected>
                <Medicine/>
              </Protected>
          }
          />
          <Route path="/searchResults" 
            element={
              <Protected>
                <Search/>
              </Protected>
            }
          />
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </div>

      </AuthContextProvider>
    </div>
    
  );
}

export default App;
