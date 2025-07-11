'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css'


mapboxgl.accessToken = 'pk.eyJ1IjoidHh1bWwiLCJhIjoiY21jcG04ZXY5MDdtdjJpcG02OWNnYmRxNSJ9.AqdDCt8d6tkB1o2YxLK89w';

export default function Map() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);


  useEffect(() => {
   
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12?optimize=true',
      center: [-99.0003, 31.0006],
      maxBounds: [[-106.6168, 25.8419],[-93.5074, 36.5008]],
      zoom: 6.7
    });

    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.enable();

 mapRef.current.on('load', () => {
          map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error;
          if (image)
          map.addImage('custom-marker', image);
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

     

      // Add a transparent polygon layer for mine-point-locality
      map.addLayer({
        id: 'mine-polygon',
        type: 'fill',
        source: 'mine-point-locality',
        paint: {
          'fill-color': '#0000ff', // Blue for locality
          'fill-opacity': 0.2      // Transparent fill
        }
      });
      map.addLayer({
        id: 'mine-polygon-zone',
        type: 'fill',
        source: 'mine-point-zone',
        paint: {
          'fill-color': '#ff0000', // Red for zones
          'fill-opacity': 0.5      // Transparent fill
        }
      });
       map.addLayer({
        id: 'mine-point-symbol',
        type: 'symbol',
        source: 'mine-point',
        layout: {
      'icon-image': 'custom-marker', 
      'icon-size': 1
  }
      });
      map.on('click', 'mine-point-symbol', (e) => {
   const feature = e.features?.[0];
  if (!feature) return;

  const mineName = feature.properties.Mine_Name || 'Unknown';

  new mapboxgl.Popup()
    .setLngLat(feature.geometry.coordinates)
    .setHTML(`<strong>${mineName}</strong>`)
    .addTo(map);
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
  
  return <div className='map-container' ref={mapContainerRef} />;
}