import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/card.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card></Card>
  </StrictMode>,
)
