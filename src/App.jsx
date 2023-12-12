import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function App() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("first");
  const param = useParams();
  useEffect(() => {
    // Your code to run when the component mounts
    window.location.href = "../src/studio-master/pages/marker/index.html";

    // Cleanup function (optional) - will be called when the component unmounts
    return () => {
      // Optional cleanup code goes here
    };
  }, []);
  return <>dvd</>;
}

export default App;
