import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ARImage from "./pages/ARImage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ARImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
