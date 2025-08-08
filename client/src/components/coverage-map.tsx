import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function CoverageMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 5.5,
      center: { lat: 53.3, lng: -7.7 },
      mapTypeId: 'roadmap',
      restriction: {
        latLngBounds: {
          north: 55.5,
          south: 51.0,
          east: -5.5,
          west: -11.0
        },
        strictBounds: true
      },
      styles: [
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit",
          stylers: [{ visibility: "off" }]
        }
      ]
    });

    // Map is now properly centered on Ireland

    // Load KML layer
    const kmlFile = 'https://raw.githubusercontent.com/failtedab/kml/main/DABWEB.KML';
    
    const kmlLayer = new window.google.maps.KmlLayer({
      url: kmlFile,
      suppressInfoWindows: false,
      map: map
    });

    kmlLayer.addListener('click', (event: any) => {
      const content = event.featureData.infoWindowHtml;
      const infoWindow = new window.google.maps.InfoWindow({
        content: content,
        position: event.latLng
      });
      infoWindow.open(map);
    });

  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[600px] lg:h-[800px] xl:h-[900px] rounded-xl shadow-lg border-2 border-blue-200"
      style={{ minHeight: '600px' }}
    />
  );
}