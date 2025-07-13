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

    // intialize the map and set the bounds to fit texas
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/outdoors-v12?optimize=true',
      center: [-99.0003, 31.0006], // changes the intial center perspective
      maxBounds: [[-106.6168, 25.8419],[-93.5074, 36.5008]],
      zoom: 6.7
    });

    mapRef.current = map;

    // map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.enable();

    map.on('load', () => {
      map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error;
          map.addImage('custom-marker', image);

          // Add a source for mine points
          map.addSource('mine-point', {
            type: 'geojson',
            data: '/mineMarkers.json' // Path relative to public folder
          });
          // Add a source for mine localities
          map.addSource('mine-point-locality', {
            type: 'geojson',
            data: '/mineLoc.json' // Path relative to public folder
          });
          // Add a source for mine zones
          map.addSource('mine-point-zone', {
            type: 'geojson',
            data: '/mineLocZone.json' // Path relative to public folder
          });

          // Add a transparent polygon layer for mine localities
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
            const feature = e.features && e.features[0];
            if (!feature) return;
            const coordinates = feature.geometry.coordinates.slice();
            const props = feature.properties || {};
            const description = `<strong>${props.Mine_Name || 'Mine'}</strong><br>${props.SiteNotes || ''}`;
            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(description)
              .addTo(map);
          });

          // Change the cursor to a pointer when hovering over the points
          map.on('mouseenter', 'mine-point-symbol', () => {
            map.getCanvas().style.cursor = 'pointer';
          });
          map.on('mouseleave', 'mine-point-symbol', () => {
            map.getCanvas().style.cursor = '';
          });
        }
      );
    });
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
        const feature = e.features && e.features[0];
        if (!feature) return;
        const coordinates = feature.geometry.coordinates.slice();
        const props = feature.properties || {};
        const description = `<strong>${props.Mine_Name || 'Mine'}</strong><br>${props.SiteNotes || ''}`;
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });
    // Change the cursor to a pointer when hovering over the points
    map.on('mouseenter', 'mine-point-symbol', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'mine-point-symbol', () => {
      map.getCanvas().style.cursor = '';
    });
    return () => {
      map.remove();
    };
  }, []);
  
  return <div className='map-container' ref={mapContainerRef} />;
}