import React from "react";
import perf from "../src/studio-master/pages/marker/index.html";

class Html extends React.Component {
  render() {
    return <iframe srcDoc={perf}></iframe>; // Use srcDoc instead of src for inline HTML
  }
}

export default Html;
