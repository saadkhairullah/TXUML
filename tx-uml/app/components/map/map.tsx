'use client';

import { useEffect, useRef } from 'react';
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
      style: 'mapbox://styles/mapbox/standard?optimize=true',
      center: [-99.0003, 31.0006],
      maxBounds: [[-106.6168, 25.8419],[-93.5074, 36.5008]],
      zoom: 6.7,
      projection: 'naturalEarth',
    });

    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.enable();

    map.on('style.load', () => {
      map.setFog({});
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div className='map-container' ref={mapContainerRef} />;
}