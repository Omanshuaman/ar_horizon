import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ARImage from "./ARImage";
import Html from "./Html";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Your code to run when the component mounts
    window.location.href = "../src/studio-master/pages/marker/index.html";

    // Cleanup function (optional) - will be called when the component unmounts
    return () => {
      // Optional cleanup code goes here
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ARImage />} />
        <Route path="/html" element={<Html />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
