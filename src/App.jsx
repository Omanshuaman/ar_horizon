import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ARImage from "./ARImage";
import Html from "./Html";

function App() {
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
