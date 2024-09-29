import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import Pollustion from "./pages/Pollustion";
import Education from "./pages/Education";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function App() {
  /* Check internet connection */
  useEffect(() => {
    const handleOffline = () => {
      toast.error("You are offline");
    };

    const handleOnline = () => {
      toast.success("You are online");
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);


  

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="weather" element={<Weather />} />
            <Route path="pollustion" element={<Pollustion />} />
            <Route path="education" element={<Education />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
