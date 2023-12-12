import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function App() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("first");
  const param = useParams();

  return (
    <>
      <a-scene
        vr-mode-ui="enabled: false;"
        loading-screen="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        id="scene"
        embedded
        gesture-detector>
        <a-assets>
          <a-asset-item
            id="animated-asset"
            src="https://jobpostingbucket.s3.ap-south-1.amazonaws.com/model/Pizza+Flip+Animation+(1).glb"></a-asset-item>
        </a-assets>

        <a-marker
          id="animated-marker"
          type="pattern"
          preset="custom"
          url="https://jobpostingbucket.s3.ap-south-1.amazonaws.com/markerPattern1702035702894.patt"
          raycaster="objects: .clickable"
          emitevents="true"
          cursor="fuse: false; rayOrigin: mouse;"
          id="markerA">
          <a-entity
            id="bowser-model"
            scale="2.078150572818595 2.078150572818595 2.078150572818595"
            animation-mixer="loop: repeat"
            gltf-model="#animated-asset"
            class="clickable"
            gesture-handler></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

export default App;
