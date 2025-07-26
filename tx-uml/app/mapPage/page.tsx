import React from 'react'
import Map from '../components/map/map'
import Legend from '../components/map/legend'
import { MapThemeProvider } from '../context/MapThemeContext';
import MapThemePicker from '../components/map/MapThemePicker';
const mapPage = () => {
  return (
    
    <div style ={{height: '100vh'}}>
    <MapThemeProvider> 
    <Map/>
    <MapThemePicker />
    </MapThemeProvider>
    <Legend/>
    </div>
  )
}

export default mapPage