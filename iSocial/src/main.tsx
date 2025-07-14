import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter as Router } from 'react-router'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Router>
  <StrictMode>
    <App/>
  </StrictMode>
  </Router>
)
