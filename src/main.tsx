import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>안녕하세요</h1>
    <h1>x: 1 + 1</h1>
    <h1>x: {1 + 1}</h1>
  </StrictMode>,
)
