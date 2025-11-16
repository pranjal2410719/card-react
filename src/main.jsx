import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profiles from './components/Profiles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profiles />
  </StrictMode>,
)
