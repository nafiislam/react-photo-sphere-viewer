'use client'
import Image from "next/image";
import {
  ReactPhotoSphereViewer,
  VirtualTourPlugin,
  GalleryPlugin,
  MarkersPlugin,
} from "react-photo-sphere-viewer";
import React from "react";

const caption = "Oncampus";

function App() {
  const pSRef = React.createRef();

  const handleReady = (instance) => {
    const virtualTour = instance.getPlugin(VirtualTourPlugin);
    if (!virtualTour) return;

    const markerLighthouse = {
      id: "marker-1",
      image: "tim-mossholder-rx_GNopVlFs-unsplash.jpg",
      tooltip: "Cape Florida Light, Key Biscayne",
      size: { width: 100, height: 100 },
      anchor: "bottom center",
      gps: [-80.156479, 60, 3],
    };

    virtualTour.setNodes(
      [
        {
          id: "1",
          panorama: "one.jpg",//picture src
          thumbnail: "one.jpg",//thumbnail of the picture
          name: "One",//name of the picture
          caption: `[1] ${caption}`,//caption for the picture
          links: [{ nodeId: "2" }],//arrow to the next picture and other linked pictures
          markers: [markerLighthouse],//normal marker that will be seen as an icon on the picture
          gps: [-80.156479, 25.666725, 3],//gps location of the picture(latitude and longitude,sea level in meters)
          panoData: { poseHeading: 180, posePitch: 3 },//poseHeading:horizontal degree at which we see when landing in this picture,posePitch: vertical degree at which we see when landing in this picture
        },
        {
          id: "2",
          panorama: "two.jpg",
          thumbnail: "two.jpg",
          name: "Two",
          caption: `[2] ${caption}`,
          links: [{ nodeId: "3" }, { nodeId: "1" }],
          markers: [markerLighthouse],
          gps: [-80.156168, 25.666725, 3],
          panoData: { poseHeading: 100 },
        },
        {
          id: "3",
          panorama: "three.jpg",
          thumbnail: "three.jpg",
          name: "Three",
          caption: `[3] ${caption}`,
          links: [{ nodeId: "4" }, { nodeId: "5" }],
          gps: [-80.155932, 25.666498, 3],
          panoData: { poseHeading: 310 },
        },
        {
          id: "4",
          panorama: "four.jpg",
          thumbnail: "four.jpg",
          name: "Four",
          caption: `[4] ${caption}`,
          links: [{ nodeId: "3" }, { nodeId: "5" }],
          gps: [-80.156089, 25.666357, 3],
          panoData: { poseHeading: 78 },
        },
        {
          id: "5",
          panorama: "five.jpg",
          thumbnail: "five.jpg",
          name: "Five",
          caption: `[5] ${caption}`,
          links: [{ nodeId: "6" }, { nodeId: "4" }],
          gps: [-80.156292, 25.666446, 3],
          panoData: { poseHeading: 190 },
        },
        {
          id: "6",
          panorama: "six.jpg",
          thumbnail: "six.jpg",
          name: "Six",
          caption: `[6] ${caption}`,
          links: [{ nodeId: "5" }, { nodeId: "7" }],
          gps: [-80.156465, 25.666496, 3],
          panoData: { poseHeading: 295 },
        },
        {
          id: "7",
          panorama: "seven.jpg",
          thumbnail: "seven.jpg",
          name: "Seven",
          caption: `[7] ${caption}`,
          links: [{ nodeId: "6" }],
          gps: [-80.15707, 25.6665, 3],
          panoData: { poseHeading: 250, posePitch: 3 },
        },
      ],
      "1" // Start node index
      ,
    );
  };

  const plugins = [
    MarkersPlugin,
    [
      GalleryPlugin,
      {
        thumbnailSize: { width: 100, height: 100 },
      },
    ],
    [
      VirtualTourPlugin,
      {
        positionMode: "gps",
        renderMode: "3d",
      },
    ],
  ];

  return (
    <div id={"container-360"}>
      <ReactPhotoSphereViewer
        ref={pSRef}
        loadingImg={"images.jpeg"}//picture during transition loading
        touchmoveTwoFingers={true}
        mousewheelCtrlKey={true}
        defaultYaw={"130deg"}
        navbar={"zoom move gallery caption fullscreen"}
        height={"100vh"}
        width={"100%"}
        onReady={handleReady}//function that will be called when the first picture is loaded
        littlePlanet={false}
        plugins={plugins}
        container={"container-360"}
        src={"tim-mossholder-rx_GNopVlFs-unsplash.jpg"}//Right before loading the first picture
      ></ReactPhotoSphereViewer>
    </div>
  );
}

export default App;
