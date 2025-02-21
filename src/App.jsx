import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import {Stories} from "./pages/Stories/Stories";
import  {Dashboard}  from "./pages/Dashboard/Dashboard";
import { HelmetProvider } from "react-helmet-async";
import Login from "./pages/Login";
import { About } from "./pages/About/About";
import {PrivacyPolicy} from "./pages/Legal/PrivacyPolicy";
import {TermsOfService} from "./pages/Legal/TermsOfService";
import {NotFound} from "./pages/NotFound/NotFound";

export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Navbar />
        </div>
      </Router>
    </HelmetProvider>
  );
};
