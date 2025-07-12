import React from 'react'
import Map from '../components/map/map'
import Legend from '../components/map/legend'

const mapPage = () => {
  return (
    <div style ={{height: '100vh'}}> 
    <Map/>
    <Legend/>
    </div>
  )
}

export default mapPage