import React, { useState } from 'react'
import RouteList from './RouteList'
import './App.css'

function App() {
  // State
  const [colors, setColors] = useState([]);
  // Handlers
  const addColor = (color) => {
      setColors(colors => [...colors, color]);
  };

  return (
    <>
      <RouteList colors={colors} addColor={addColor} />
    </>
  )
}

export default App
