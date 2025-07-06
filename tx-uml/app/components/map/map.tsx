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
      style: 'mapbox://styles/mapbox/outdoors-v12?optimize=true',
      center: [-99.0003, 31.0006],
      maxBounds: [[-106.6168, 25.8419],[-93.5074, 36.5008]],
      zoom: 6.7,
      projection: 'mercator',
    });

    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.enable();

    const markers: mapboxgl.Marker[] = [];
 mapRef.current.on('load', () => {
          map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error;
          map.addImage('custom-marker', image);
      map.addSource('mine-point', {
        type: 'geojson',
        data: '/mineMarkers.json' // Path relative to public folder
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
    });
    });
    return () => {
      map.remove();
    };
  }, []);
  
  return <div className='map-container' ref={mapContainerRef} />;
}