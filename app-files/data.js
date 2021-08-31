var APP_DATA = {
  scenes: [
    {
      id: "0-lobby-area-view-1",
      name: "Lobby Area View 1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 4096,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.29570931005603995,
          pitch: 0.29516263591955116,
          rotation: 0,
          target: "1-lobby-area-view-2",
        },
      ],
      infoHotspots: [
        {
          yaw: 1.7226834453724047,
          pitch: 0.22735544194642188,
          title: "Information",
          text: "Information Tentang LPDP",
        },
        {
          yaw: 2.606226287521298,
          pitch: 0.009643333941196985,
          title: "PhotoBooth",
          text: "Aktif Kamera Depan",
        },
      ],
    },
    {
      id: "1-lobby-area-view-2",
      name: "Lobby-Area-View-2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 4096,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -3.0552107817100485,
          pitch: 0.3567023055295735,
          rotation: 0,
          target: "0-lobby-area-view-1",
        },
      ],
      infoHotspots: [],
    },
  ],
  name: "LPDP",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: false,
    viewControlButtons: false,
  },
};
