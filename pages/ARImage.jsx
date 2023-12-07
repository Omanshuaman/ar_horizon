import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ARImage() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("first");
  const param = useParams();
  useEffect(() => {
    console.log("dd", param.id);
    const fetchData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get(
          `https://3ef9gn5kk2.execute-api.ap-south-1.amazonaws.com/arnxt_prod/ar-horizon/uploadtargetimage?id=${param.id}`
        );
        console.log(response.data);
        // Set the response data in state
        setResponseData(response.data);
        setLoading(false);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [param]);
  return (
    <>
      {responseData ? (
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
              src="assets/asset.glb"></a-asset-item>
          </a-assets>

          <a-marker
            id="animated-marker"
            type="pattern"
            preset="custom"
            url={responseData.TargetImagePattFile}
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
      ) : null}
    </>
  );
}

export default ARImage;
