'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css'


mapboxgl.accessToken = 'pk.eyJ1IjoidHh1bWwiLCJhIjoiY21jcG04ZXY5MDdtdjJpcG02OWNnYmRxNSJ9.AqdDCt8d6tkB1o2YxLK89w';

export default function Map() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);


  useEffect(() => {
   
    if (!mapContainerRef.current) return;

    // intializing the map centered and bounded on texas
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12?optimize=true',
      center: [-99.0003, 31.0006],
      maxBounds: [[-106.6168, 25.8419],[-93.5074, 36.5008]],
      zoom: 6.7
    });

    mapRef.current = map; // shortcut for mapRef.current, use map instead

    map.scrollZoom.enable();

 mapRef.current.on('load', () => {
          map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error;
          if (image)

      map.addImage('custom-marker', image); // add the image we will use for mine markers

      // .addSource adds all of our json sources so that they can be later added as layers
      map.addSource('mine-point', {
        type: 'geojson',
        data: '/mineMarkers.json' // Path relative to public folder
      });
      map.addSource('mine-point-locality', {
        type: 'geojson',
        data: '/mineLoc.json' // Path relative to public folder
      });
      map.addSource('mine-point-zone', {
        type: 'geojson',
        data: '/mineLocZone.json' // Path relative to public folder
      });

     

      // Add a polygon layer for mine-point-locality
      map.addLayer({
        id: 'mine-polygon',
        type: 'fill',
        source: 'mine-point-locality',
        paint: {
          'fill-color': '#0000ff', // Blue for locality
          'fill-opacity': 0.2    
        }
      });
      // Add a polygon layer for mine-point-zone
      map.addLayer({
        id: 'mine-polygon-zone',
        type: 'fill',
        source: 'mine-point-zone',
        paint: {
          'fill-color': '#ff0000', // Red for zones
          'fill-opacity': 0.5    
        }
      });
      // add the symbols for the mine loications
       map.addLayer({
        id: 'mine-point-symbol',
        type: 'symbol',
        source: 'mine-point',
        layout: {
      'icon-image': 'custom-marker', // image earlier added in map.on(load) function
      'icon-size': 1
  }
      });

      //onclick function that displays popup when you click on a "mine-point-symbol"
      map.on('click', 'mine-point-symbol', (e) => {
   const feature = e.features?.[0]
  if (!feature) return;

  const mineName = feature.properties?.Mine_Name || 'Unknown';
  const siteNumber = feature.properties?.SITE_NUMBE || 'N/A';
  const siteID = feature.properties?.SITE_ID || 'N/A';
  const mineType = feature.properties?.MineType || 'Unknown';
  const coalType = feature.properties?.CoalType || 'Unknown';
  const period = feature.properties?.Period || 'Unknown';
  const source = feature.properties?.InfoSource|| 'Unknown';

  // this block of code is what appears in the popups
    const popupHtml = `
    <div>
      <strong>Mine Name:</strong> ${mineName}<br/>
      <strong>Site Number:</strong> ${siteNumber}<br/>
      <strong>Site ID:</strong> ${siteID}<br/>
      <strong>Mine Type:</strong> ${mineType}<br/>
      <strong>Coal Type:</strong> ${coalType}<br/>
      <strong>Period:</strong> ${period}<br/>
      <strong>Source:</strong> ${source}
    </div>
  `;
 if (feature.geometry.type === 'Point') {
  const coords = feature.geometry.coordinates as [number, number];
  
  new mapboxgl.Popup()
    .setLngLat(coords)
    .setHTML(popupHtml)
    .addTo(map);
} else {
  console.warn('Feature geometry is not a Point.');
}
});

// Change cursor to pointer
map.on('mouseenter', 'mine-point-symbol', () => {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'mine-point-symbol', () => {
  map.getCanvas().style.cursor = '';
});

    });
    });
    // outside map.onload function


    return () => {
      map.remove();
    };
  }, []);
  
  return  <div className='map-container' ref={mapContainerRef} />;
 
  
}