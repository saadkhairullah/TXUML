
import React from 'react';
import './legend.css'

export default function Legend() {
  return (
    <div className='LegendConatiner' >
      <strong>Legend</strong>
      <div style={{display: 'flex', alignItems: 'center', marginTop: 8}}>
        <span className='ZoneLegend' />
        <span>Mine Zone</span>
      </div>
      <div style={{display: 'flex', alignItems: 'center', marginTop: 6}}>
        <button className='LocalityLegend' />
        <span>Mine Locality</span>
      </div>
    </div>
  );
}