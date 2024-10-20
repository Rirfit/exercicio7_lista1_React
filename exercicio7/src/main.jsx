import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Compra from './components/Compra'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Compra temDesconto = {true}/> <br />
    <Compra temDesconto = {false}/>
  </StrictMode>,
)
