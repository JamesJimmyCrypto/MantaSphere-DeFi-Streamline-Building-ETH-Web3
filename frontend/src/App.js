import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CreateContent from "./pages/CreateContent";
import Governance from "./pages/Governance";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-content" element={<CreateContent />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/governance" element={<Governance />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
