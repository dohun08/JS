import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Count from './App.jsx'
import Map from "./map.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count />
      <Map />
  </StrictMode>,
)
