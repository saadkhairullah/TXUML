import React from 'react'
import Map from '../components/map/map'
import Legend from '../components/map/legend'
import { MapThemeProvider } from '../context/MapThemeContext';
import MapThemePicker from '../components/map/MapThemePicker';
import ProgressBar from '../components/map/ProgressBar';
const mapPage = () => {
  return (
    
    <div style ={{height: '100vh'}}>
    <MapThemeProvider> 
    <ProgressBar />
    <Map/>
    <MapThemePicker />
    <Legend/>
    </MapThemeProvider>
    </div>
  )
}

export default mapPage