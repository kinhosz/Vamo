import { useEffect, useState } from "react";

export default function Index() {
  const [mapsLoaded, setMapsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const waitGoogleMaps = () => {
      if (google && google.maps) setMapsLoaded(true);
      else setTimeout(waitGoogleMaps, 500);
    };

    waitGoogleMaps();
  }, []);

  useEffect(() => {
    let map;
    async function initMap(): Promise<void> {
      const position = { lat: -25.344, lng: 131.031 };

      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      map = new Map(
        document.getElementById('map') as HTMLElement,
        {
          zoom: 4,
          center: position,
          mapId: 'DEMO_MAP_ID',
        }
      );

      const marker = new Marker({
        map: map,
        position: position,
        title: 'Uluru'
      });
    }

    if (mapsLoaded) initMap();
  }, [mapsLoaded]);

  return (
    <>
      <h1>Hello World!</h1>  
    </>
  );
}


