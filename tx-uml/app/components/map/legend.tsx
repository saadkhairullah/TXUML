"use client";
import React from 'react';
import './legend.css'
import { useMapTheme } from '../../context/MapThemeContext';

export default function Legend() {
  const { theme } = useMapTheme();

  let style: React.CSSProperties = {};
  if (theme === 'dark') {
    style = { background: '#222', color: '#fff' };
  } else if (theme === 'satellite') {
    style = { background: '#001f3f', color: '#fff' }; // navy background
  } else {
    style = { background: '#fff', color: '#222' };
  }

  return (
    <div className='LegendConatiner' style={style}>
      <strong>Legend</strong>
      <div style={{display: 'flex', alignItems: 'center', marginTop: 8}}>
        <span className='ZoneLegend' />
        <span>Mine Zone</span>
      </div>
      <div style={{display: 'flex', alignItems: 'center', marginTop: 6}}>
        <span className='LocalityLegend' />
        <span>Mine Locality</span>
      </div>
    </div>
  );
}